const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  setAutoLaunch: (enabled) => ipcRenderer.invoke('set-auto-launch', enabled),
  getAutoLaunch: () => ipcRenderer.invoke('get-auto-launch'),
  setMinimizeToTray: (enabled) => ipcRenderer.send('set-minimize-to-tray', enabled),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  loadSettings: () => ipcRenderer.invoke('load-settings'),
  setAlwaysOnTop: (value) => ipcRenderer.send('set-always-on-top', value),
  onSettingsLoaded: (callback) => ipcRenderer.on('settings-loaded', (e, settings) => callback(settings)),
});
