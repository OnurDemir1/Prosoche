const { app, BrowserWindow, ipcMain, Tray, Menu, nativeImage, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const runtimeDataPath = path.join(app.getPath('appData'), 'Prosoche');
const cachePath = path.join(runtimeDataPath, 'Cache');

app.setPath('userData', runtimeDataPath);
app.setPath('sessionData', cachePath);
app.commandLine.appendSwitch('disk-cache-dir', cachePath);

let mainWindow = null;
let tray = null;
let isQuitting = false;
let minimizeToTray = true;
let allowNativeMinimizeOnce = false;
let lastMinimizeTime = 0;
const MINIMIZE_DEBOUNCE_MS = 300;

// Settings file path
const settingsPath = path.join(app.getPath('userData'), 'settings.json');

function loadSettings() {
  const defaults = {
    autostart: false,
    alwaysOnTop: false,
    minimizeToTray: true,
    language: 'en',
    clockFormat: '24',
    autoBreak: true,
    autoWork: true,
    longBreakInterval: 4,
    longBreakDuration: 15,
    notificationSound: true,
    desktopNotification: false,
    masterVolume: 80,
    pauseOnBreak: false,
    pauseOnStop: false,
    crossfade: 2.5,
    dynamicBackground: true,
    weatherSync: false
  };

  try {
    if (fs.existsSync(settingsPath)) {
      const saved = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
      return { ...defaults, ...saved };
    }
  } catch (e) {
    console.error('Error loading settings:', e);
  }
  return defaults;
}

function saveSettings(settings) {
  try {
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
  } catch (e) {}
}

function showMainWindow() {
  if (!mainWindow) return;
  mainWindow.setSkipTaskbar(false);
  mainWindow.show();
  mainWindow.focus();
}

function hideToTray() {
  if (!mainWindow) return;
  const trayReady = createTray();
  if (!trayReady) {
    allowNativeMinimizeOnce = true;
    mainWindow.minimize();
    return;
  }
  mainWindow.setSkipTaskbar(true);
  mainWindow.hide();
}

function createTray() {
  if (tray) return true;

  const iconCandidates = [
    path.join(__dirname, '../../assets/icon.png'),
    path.join(__dirname, '../../assets/icon.ico'),
  ];

  let trayIcon = null;
  for (const iconPath of iconCandidates) {
    if (fs.existsSync(iconPath)) {
      try {
        const img = nativeImage.createFromPath(iconPath);
        if (!img.isEmpty()) {
          trayIcon = img;
          break;
        }
      } catch (e) {
        console.warn('Tray icon path could not be loaded:', iconPath);
      }
    }
  }

  if (!trayIcon) {
    try {
      const procIcon = nativeImage.createFromPath(process.execPath);
      if (!procIcon.isEmpty()) {
        trayIcon = procIcon;
      }
    } catch (e) {
      console.warn('Process icon could not be loaded for tray.');
    }
  }

  if (!trayIcon) {
    try {
      const fallbackPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAQElEQVQokaXQMQ4AIAhD0f7/p22xQkQY2nQ4jLQkQAHxkYhG4kzS6kNfQ1Yb8kqY4wDg2nqjF6T0M4q1b8zJQf2P4A2K6h5y3Jt8wAAAABJRU5ErkJggg==';
      trayIcon = nativeImage.createFromBuffer(Buffer.from(fallbackPngBase64, 'base64'));
    } catch (e) {
      trayIcon = null;
    }
  }

  if (!trayIcon || trayIcon.isEmpty()) {
    return false;
  }

  try {
    tray = new Tray(trayIcon);
  } catch (e) {
    console.error('Tray icon could not be created:', e);
    tray = null;
    return false;
  }
  tray.setToolTip('Prosoche');

  const menu = Menu.buildFromTemplate([
    { label: 'Prosoche Aç', click: showMainWindow },
    {
      label: 'Çıkış',
      click: () => {
        isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setContextMenu(menu);
  tray.on('double-click', showMainWindow);
  tray.on('click', showMainWindow); // Add single click support for better UX
  return true;
}

function destroyTray() {
  if (!tray) return;
  tray.destroy();
  tray = null;
}

function createWindow() {
  const settings = loadSettings();
  minimizeToTray = !!settings.minimizeToTray;

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    transparent: false,
    backgroundColor: '#0a0a1a',
    webPreferences: {
      preload: path.join(__dirname, '../renderer/preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
    },
    icon: path.join(__dirname, '../../assets/icon.png'),
    show: false,
  });

  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const currentUrl = mainWindow.webContents.getURL();
    if (url !== currentUrl) {
      event.preventDefault();
    }
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // Send saved settings to renderer
    mainWindow.webContents.send('settings-loaded', settings);
  });

  mainWindow.on('minimize', (event) => {
    if (allowNativeMinimizeOnce) {
      allowNativeMinimizeOnce = false;
      return;
    }
    
    // Debounce minimize events to prevent taskbar double-click from triggering tray
    const now = Date.now();
    if (now - lastMinimizeTime < MINIMIZE_DEBOUNCE_MS) {
      // This is likely a rapid minimize/restore from taskbar click, allow native behavior
      lastMinimizeTime = now;
      return;
    }
    lastMinimizeTime = now;
    
    if (minimizeToTray) {
      event.preventDefault();
      hideToTray();
    }
  });

  mainWindow.on('close', (event) => {
    if (!minimizeToTray || isQuitting) return;
    event.preventDefault();
    hideToTray();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('before-quit', () => {
  isQuitting = true;
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('open-external', async (event, rawUrl) => {
  if (typeof rawUrl !== 'string') return false;
  const url = rawUrl.trim();
  if (!url) return false;

  const isAllowed = url.startsWith('https://') || url.startsWith('mailto:');
  if (!isAllowed) return false;

  try {
    await shell.openExternal(url);
    return true;
  } catch (e) {
    return false;
  }
});

// Window controls
ipcMain.on('window-minimize', () => {
  if (!mainWindow) return;
  if (minimizeToTray) {
    hideToTray();
    return;
  }
  mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on('window-close', () => {
  if (mainWindow) mainWindow.close();
});

// Auto-start toggle
ipcMain.handle('set-auto-launch', async (event, enabled) => {
  app.setLoginItemSettings({
    openAtLogin: enabled,
    path: process.execPath,
  });
  return true;
});

ipcMain.handle('get-auto-launch', async () => {
  const settings = app.getLoginItemSettings();
  return settings.openAtLogin;
});

// Settings persistence
ipcMain.handle('save-settings', async (event, settings) => {
  saveSettings(settings);
  return true;
});

ipcMain.handle('load-settings', async () => {
  return loadSettings();
});

// Always on top
ipcMain.on('set-always-on-top', (event, value) => {
  if (mainWindow) mainWindow.setAlwaysOnTop(value);
});

ipcMain.on('set-minimize-to-tray', (event, value) => {
  minimizeToTray = !!value;

  if (!mainWindow) return;

  if (!minimizeToTray) {
    mainWindow.setSkipTaskbar(false);
    destroyTray();
  } else {
    const trayReady = createTray();
    if (!trayReady) {
      minimizeToTray = false;
      mainWindow.setSkipTaskbar(false);
    }
  }
});
