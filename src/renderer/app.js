// ===== SOUND DATABASE =====
const SOUND_DB = {
  rain: [
    { id: 'heavy-rain', name: 'Şiddetli Yağmur', file: '../../assets/sounds/rain/heavy-rain.mp3' },
    { id: 'light-rain', name: 'Hafif Yağmur', file: '../../assets/sounds/rain/light-rain.mp3' },
    { id: 'rain-on-car-roof', name: 'Araba Tavanında Yağmur', file: '../../assets/sounds/rain/rain-on-car-roof.mp3' },
    { id: 'rain-on-leaves', name: 'Yapraklarda Yağmur', file: '../../assets/sounds/rain/rain-on-leaves.mp3' },
    { id: 'rain-on-tent', name: 'Çadırda Yağmur', file: '../../assets/sounds/rain/rain-on-tent.mp3' },
    { id: 'rain-on-umbrella', name: 'Şemsiyede Yağmur', file: '../../assets/sounds/rain/rain-on-umbrella.mp3' },
    { id: 'rain-on-window', name: 'Camda Yağmur', file: '../../assets/sounds/rain/rain-on-window.mp3' },
    { id: 'thunder', name: 'Gök Gürültüsü', file: '../../assets/sounds/rain/thunder.mp3' },
  ],
  nature: [
    { id: 'campfire', name: 'Kamp Ateşi', file: '../../assets/sounds/nature/campfire.mp3' },
    { id: 'droplets', name: 'Damlalar', file: '../../assets/sounds/nature/droplets.mp3' },
    { id: 'howling-wind', name: 'Uğuldayan Rüzgar', file: '../../assets/sounds/nature/howling-wind.mp3' },
    { id: 'jungle', name: 'Orman', file: '../../assets/sounds/nature/jungle.mp3' },
    { id: 'river', name: 'Nehir', file: '../../assets/sounds/nature/river.mp3' },
    { id: 'walk-in-snow', name: 'Karda Yürüyüş', file: '../../assets/sounds/nature/walk-in-snow.mp3' },
    { id: 'walk-on-gravel', name: 'Çakılda Yürüyüş', file: '../../assets/sounds/nature/walk-on-gravel.mp3' },
    { id: 'walk-on-leaves', name: 'Yapraklarda Yürüyüş', file: '../../assets/sounds/nature/walk-on-leaves.mp3' },
    { id: 'waterfall', name: 'Şelale', file: '../../assets/sounds/nature/waterfall.mp3' },
    { id: 'waves', name: 'Dalgalar', file: '../../assets/sounds/nature/waves.mp3' },
    { id: 'wind-in-trees', name: 'Ağaçlarda Rüzgar', file: '../../assets/sounds/nature/wind-in-trees.mp3' },
    { id: 'wind', name: 'Rüzgar', file: '../../assets/sounds/nature/wind.mp3' },
  ],
  animals: [
    { id: 'beehive', name: 'Arı Kovanı', file: '../../assets/sounds/animals/beehive.mp3' },
    { id: 'birds', name: 'Kuşlar', file: '../../assets/sounds/animals/birds.mp3' },
    { id: 'cat-purring', name: 'Kedi Mırıltısı', file: '../../assets/sounds/animals/cat-purring.mp3' },
    { id: 'chickens', name: 'Tavuklar', file: '../../assets/sounds/animals/chickens.mp3' },
    { id: 'cows', name: 'İnekler', file: '../../assets/sounds/animals/cows.mp3' },
    { id: 'crickets', name: 'Cırcır Böcekleri', file: '../../assets/sounds/animals/crickets.mp3' },
    { id: 'crows', name: 'Kargalar', file: '../../assets/sounds/animals/crows.mp3' },
    { id: 'dog-barking', name: 'Köpek Havlaması', file: '../../assets/sounds/animals/dog-barking.mp3' },
    { id: 'frog', name: 'Kurbağa', file: '../../assets/sounds/animals/frog.mp3' },
    { id: 'horse-gallop', name: 'Dört Nala At', file: '../../assets/sounds/animals/horse-gallop.mp3' },
    { id: 'owl', name: 'Baykuş', file: '../../assets/sounds/animals/owl.mp3' },
    { id: 'seagulls', name: 'Martılar', file: '../../assets/sounds/animals/seagulls.mp3' },
    { id: 'sheep', name: 'Koyunlar', file: '../../assets/sounds/animals/sheep.mp3' },
    { id: 'whale', name: 'Balina', file: '../../assets/sounds/animals/whale.mp3' },
    { id: 'wolf', name: 'Kurt', file: '../../assets/sounds/animals/wolf.mp3' },
    { id: 'woodpecker', name: 'Ağaçkakan', file: '../../assets/sounds/animals/woodpecker.mp3' },
  ],
  places: [
    { id: 'airport', name: 'Havaalanı', file: '../../assets/sounds/places/airport.mp3' },
    { id: 'cafe', name: 'Kafe', file: '../../assets/sounds/places/cafe.mp3' },
    { id: 'carousel', name: 'Atlıkarınca', file: '../../assets/sounds/places/carousel.mp3' },
    { id: 'church', name: 'Kilise', file: '../../assets/sounds/places/church.mp3' },
    { id: 'construction-site', name: 'İnşaat', file: '../../assets/sounds/places/construction-site.mp3' },
    { id: 'crowded-bar', name: 'Kalabalık Bar', file: '../../assets/sounds/places/crowded-bar.mp3' },
    { id: 'laboratory', name: 'Laboratuvar', file: '../../assets/sounds/places/laboratory.mp3' },
    { id: 'laundry-room', name: 'Çamaşır Odası', file: '../../assets/sounds/places/laundry-room.mp3' },
    { id: 'library', name: 'Kütüphane', file: '../../assets/sounds/places/library.mp3' },
    { id: 'night-village', name: 'Gece Köyü', file: '../../assets/sounds/places/night-village.mp3' },
    { id: 'office', name: 'Ofis', file: '../../assets/sounds/places/office.mp3' },
    { id: 'restaurant', name: 'Restoran', file: '../../assets/sounds/places/restaurant.mp3' },
    { id: 'subway-station', name: 'Metro İstasyonu', file: '../../assets/sounds/places/subway-station.mp3' },
    { id: 'supermarket', name: 'Süpermarket', file: '../../assets/sounds/places/supermarket.mp3' },
    { id: 'temple', name: 'Tapınak', file: '../../assets/sounds/places/temple.mp3' },
    { id: 'underwater', name: 'Su Altı', file: '../../assets/sounds/places/underwater.mp3' },
  ],
  things: [
    { id: 'boiling-water', name: 'Kaynayan Su', file: '../../assets/sounds/things/boiling-water.mp3' },
    { id: 'bubbles', name: 'Kabarcıklar', file: '../../assets/sounds/things/bubbles.mp3' },
    { id: 'ceiling-fan', name: 'Tavan Vantilatörü', file: '../../assets/sounds/things/ceiling-fan.mp3' },
    { id: 'clock', name: 'Saat', file: '../../assets/sounds/things/clock.mp3' },
    { id: 'dryer', name: 'Kurutucu', file: '../../assets/sounds/things/dryer.mp3' },
    { id: 'keyboard', name: 'Klavye', file: '../../assets/sounds/things/keyboard.mp3' },
    { id: 'morse-code', name: 'Mors Kodu', file: '../../assets/sounds/things/morse-code.mp3' },
    { id: 'paper', name: 'Kağıt', file: '../../assets/sounds/things/paper.mp3' },
    { id: 'singing-bowl', name: 'Tibet Çanağı', file: '../../assets/sounds/things/singing-bowl.mp3' },
    { id: 'slide-projector', name: 'Slayt Projektörü', file: '../../assets/sounds/things/slide-projector.mp3' },
    { id: 'tuning-radio', name: 'Radyo Ayarlama', file: '../../assets/sounds/things/tuning-radio.mp3' },
    { id: 'typewriter', name: 'Daktilo', file: '../../assets/sounds/things/typewriter.mp3' },
    { id: 'vinyl-effect', name: 'Plak Efekti', file: '../../assets/sounds/things/vinyl-effect.mp3' },
    { id: 'washing-machine', name: 'Çamaşır Makinesi', file: '../../assets/sounds/things/washing-machine.mp3' },
    { id: 'wind-chimes', name: 'Rüzgar Çanları', file: '../../assets/sounds/things/wind-chimes.mp3' },
    { id: 'windshield-wipers', name: 'Silecekler', file: '../../assets/sounds/things/windshield-wipers.mp3' },
  ],
  transport: [
    { id: 'airplane', name: 'Uçak', file: '../../assets/sounds/transport/airplane.mp3' },
    { id: 'inside-a-train', name: 'Tren İçi', file: '../../assets/sounds/transport/inside-a-train.mp3' },
    { id: 'rowing-boat', name: 'Kürek Teknesi', file: '../../assets/sounds/transport/rowing-boat.mp3' },
    { id: 'sailboat', name: 'Yelkenli', file: '../../assets/sounds/transport/sailboat.mp3' },
    { id: 'submarine', name: 'Denizaltı', file: '../../assets/sounds/transport/submarine.mp3' },
    { id: 'train', name: 'Tren', file: '../../assets/sounds/transport/train.mp3' },
  ],
  urban: [
    { id: 'ambulance-siren', name: 'Ambulans Sireni', file: '../../assets/sounds/urban/ambulance-siren.mp3' },
    { id: 'busy-street', name: 'İşlek Sokak', file: '../../assets/sounds/urban/busy-street.mp3' },
    { id: 'crowd', name: 'Kalabalık', file: '../../assets/sounds/urban/crowd.mp3' },
    { id: 'fireworks', name: 'Havai Fişek', file: '../../assets/sounds/urban/fireworks.mp3' },
    { id: 'highway', name: 'Otoyol', file: '../../assets/sounds/urban/highway.mp3' },
    { id: 'road', name: 'Yol', file: '../../assets/sounds/urban/road.mp3' },
    { id: 'traffic', name: 'Trafik', file: '../../assets/sounds/urban/traffic.mp3' },
  ],
  noise: [
    { id: 'brown-noise', name: 'Kahverengi Gürültü', file: '../../assets/sounds/noise/brown-noise.wav' },
    { id: 'pink-noise', name: 'Pembe Gürültü', file: '../../assets/sounds/noise/pink-noise.wav' },
    { id: 'white-noise', name: 'Beyaz Gürültü', file: '../../assets/sounds/noise/white-noise.wav' },
  ],
  binaural: [
    { id: 'binaural-alpha', name: 'Alfa (8-12 Hz)', file: '../../assets/sounds/binaural/binaural-alpha.wav' },
    { id: 'binaural-beta', name: 'Beta (12-30 Hz)', file: '../../assets/sounds/binaural/binaural-beta.wav' },
    { id: 'binaural-delta', name: 'Delta (0.5-4 Hz)', file: '../../assets/sounds/binaural/binaural-delta.wav' },
    { id: 'binaural-gamma', name: 'Gama (30-100 Hz)', file: '../../assets/sounds/binaural/binaural-gamma.wav' },
    { id: 'binaural-theta', name: 'Teta (4-8 Hz)', file: '../../assets/sounds/binaural/binaural-theta.wav' },
  ],
};

const CATEGORY_NAMES = {
  tr: {
    rain: 'Yağmur',
    nature: 'Doğa',
    animals: 'Hayvanlar',
    places: 'Mekanlar',
    things: 'Eşyalar',
    transport: 'Ulaşım',
    urban: 'Şehir',
    noise: 'Gürültü',
    binaural: 'Binaural',
  },
  en: {
    rain: 'Rain',
    nature: 'Nature',
    animals: 'Animals',
    places: 'Places',
    things: 'Things',
    transport: 'Transport',
    urban: 'Urban',
    noise: 'Noise',
    binaural: 'Binaural',
  }
};

function getMasterVolumeFactor() {
  return Math.max(0, Math.min(1, appSettings.masterVolume / 100));
}

function applyMasterVolumeToActiveSounds() {
  const factor = getMasterVolumeFactor();
  const isPausedByReason = state.soundPauseReasons.break || state.soundPauseReasons.stop;

  Object.entries(state.activeSounds).forEach(([soundId, sound]) => {
    const ctx = getAudioContext();
    if (isPausedByReason) {
      ensurePauseSnapshot();
      state.pausedSoundVolumes[soundId] = sound.volume * factor;
      sound.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      return;
    }
    sound.masterGain.gain.setValueAtTime(sound.volume * factor, ctx.currentTime);
  });
}

function hasActiveSoundPauseReason() {
  return state.soundPauseReasons.break || state.soundPauseReasons.stop;
}

function ensurePauseSnapshot() {
  if (state.pausedSoundVolumes) return;

  const factor = getMasterVolumeFactor();
  state.pausedSoundVolumes = {};
  Object.entries(state.activeSounds).forEach(([soundId, sound]) => {
    state.pausedSoundVolumes[soundId] = sound.volume * factor;
  });
}

function setSoundPauseReason(reason, enabled) {
  if (!(reason in state.soundPauseReasons)) return;

  state.soundPauseReasons[reason] = !!enabled;

  if (hasActiveSoundPauseReason()) {
    ensurePauseSnapshot();
    const ctx = getAudioContext();

    Object.values(state.activeSounds).forEach((sound) => {
      sound.masterGain.gain.cancelScheduledValues(ctx.currentTime);
      sound.masterGain.gain.setValueAtTime(sound.masterGain.gain.value, ctx.currentTime);
      sound.masterGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
    });
    return;
  }

  if (!state.pausedSoundVolumes) return;

  const ctx = getAudioContext();
  Object.entries(state.activeSounds).forEach(([soundId, sound]) => {
    const fallback = sound.volume * getMasterVolumeFactor();
    const target = typeof state.pausedSoundVolumes[soundId] === 'number'
      ? state.pausedSoundVolumes[soundId]
      : fallback;

    sound.masterGain.gain.cancelScheduledValues(ctx.currentTime);
    sound.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    sound.masterGain.gain.linearRampToValueAtTime(Math.max(0, target), ctx.currentTime + 0.3);
  });

  state.pausedSoundVolumes = null;
}

function pauseAllSounds() {
  setSoundPauseReason('stop', true);
}

function resumeAllSounds() {
  setSoundPauseReason('stop', false);
}

// ===== POMODORO PRESETS =====
const PRESETS = {
  classic: { work: 25, break: 5, sessions: 4 },
  long: { work: 50, break: 10, sessions: 2 },
};

// ===== ZEN QUOTES =====
const ZEN_QUOTES = {
  tr: [
    'Başarının sırrı, sıradan şeyleri sıra dışı bir şekilde yapmaktır.',
    'Odaklanmak, binlerce iyi fikre hayır demektir.',
    'Umutsuz durumlar yoktur, umutsuz insanlar vardır.',
    'Mükemmellik bir eylem değil, bir alışkanlıktır.',
    'Zamanın kaybolması, varlığın kaybolmasıdır.',
    'En büyük ustalık, kendine hakim olmaktır.',
    'Dikkatin neredeyse, enerjin oraya akar.',
    'Başlamak için mükemmel olman gerekmez, ancak mükemmel olmak için başlamalısın.',
    'Az, her zaman daha fazladır.',
    'Şimdi ve burada ol.',
    'Küçük adımlar büyük dönüşümlerin başlangıcıdır.',
    'Sakin zihin, keskin odak getirir.',
    'Disiplin, özgürlüğün en sessiz yoludur.',
    'Yavaş ilerlemek, durmaktan iyidir.',
    'Bugün yaptığın şey, yarınki seni kurar.',
    'Sadelik, zihnin nefes almasıdır.',
    'Dış gürültü azalınca iç ses netleşir.',
    'Dikkat, en değerli para birimindir.',
    'Bir işi bitirmek, başlamaktan daha çok cesaret ister.',
    'Derin çalışma, derin tatmin üretir.'
  ],
  en: [
    'Focus is saying no to a thousand good ideas.',
    'Excellence is not an act, but a habit.',
    'Where attention goes, energy flows.',
    'Small steps build remarkable outcomes.',
    'Discipline is a quiet form of freedom.',
    'Clarity grows in calm minds.',
    'Progress beats perfection every day.',
    'What you do today shapes who you become tomorrow.',
    'Simplicity gives the mind room to breathe.',
    'Deep work creates deep satisfaction.',
    'You do not need to be perfect to begin.',
    'Consistency turns effort into identity.',
    'A calm breath resets a busy mind.',
    'Attention is your most valuable currency.',
    'Finishing is a superpower.',
    'One clear priority is enough for now.',
    'Stillness is not empty, it is full of answers.',
    'The present moment is your sharpest tool.',
    'Less noise, more signal.',
    'Slow is smooth, smooth is fast.'
  ]
};

// ===== APP STATE =====
const state = {
  mode: 'clock',
  preset: 'classic',
  customWork: 25,
  customBreak: 5,
  customSessions: 4,
  pomoState: 'idle',
  timerPhase: 'work',
  currentSession: 1,
  totalSessions: 4,
  workDuration: 25 * 60,
  breakDuration: 5 * 60,
  timeRemaining: 25 * 60,
  timerInterval: null,
  activeSounds: {},
  openCategory: null,
  pausedSoundVolumes: null,
  soundPauseReasons: {
    break: false,
    stop: false,
  },
  weatherData: null,
  savedScenes: [],
  lastZenQuoteIndex: -1
};

const appSettings = {
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

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const SUPPORT_EMAIL = 'onurd2750@gmail.com';
const GITHUB_REPO_URL = 'https://github.com/OnurDemir1/Prosoche';
const GITHUB_BUG_URL = 'https://github.com/OnurDemir1/Prosoche/issues/new';

function openExternalUrl(url) {
  if (window.electronAPI && typeof window.electronAPI.openExternal === 'function') {
    return Promise.resolve(window.electronAPI.openExternal(url))
      .then((opened) => {
        if (opened) return true;
        window.open(url, '_blank', 'noopener,noreferrer');
        return false;
      })
      .catch(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
        return false;
      });
  }
  window.open(url, '_blank', 'noopener,noreferrer');
  return Promise.resolve(true);
}

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  tr: {
    greetings: {
      morning: 'GÜNAAYDIN',
      afternoon: 'İYİ GÜNLER',
      evening: 'İYİ AKŞAMLAR'
    },
    days: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    timer: {
      focus: 'ODAKLAN',
      break: 'MOLA',
      session: 'Oturum'
    },
    notifications: {
      allComplete: 'Tebrikler, tüm oturumları tamamladınız!',
      breakTime: 'Mola vakti! Lütfen dinlenin.',
      workTime: 'Çalışma vakti! Odaklanmaya dönün.'
    }
  },
  en: {
    greetings: {
      morning: 'GOOD MORNING',
      afternoon: 'GOOD AFTERNOON',
      evening: 'GOOD EVENING'
    },
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    timer: {
      focus: 'FOCUS',
      break: 'BREAK',
      session: 'Session'
    },
    notifications: {
      allComplete: 'Congratulations, you completed all sessions!',
      breakTime: 'Break time! Please rest.',
      workTime: 'Work time! Get back to focus.'
    }
  }
};

const UI_TRANSLATIONS = {
  tr: {
    modeClock: 'Saat',
    modePomodoro: 'Pomodoro',
    presets: {
      classicLabel: 'Klasik',
      classicDetail: '25/5 · 4 oturum',
      longLabel: 'Uzun',
      longDetail: '50/10 · 2 oturum',
      customLabel: 'Özel',
      customDetail: 'Kendi kuralların'
    },
    custom: {
      work: 'Çalışma',
      break: 'Mola',
      session: 'Oturum',
      minute: 'dk'
    },
    startFocus: 'Odaklanmaya Başla',
    scene: {
      saveTitle: 'Sahneyi Kaydet',
      loadTitle: 'Sahne Yükle'
    },
    settingsBtn: 'Ayarlar',
    settingsTitle: 'Ayarlar',
    tabs: ['Genel', 'Pomodoro', 'Hakkında'],
    general: {
      groups: ['Sistem', 'Görünüm'],
      rows: [
        ['Başlangıçta Çalıştır', 'Bilgisayar açıldığında uygulamayı otomatik başlat'],
        ['Her Zaman Üstte', 'Pencereyi diğer uygulamaların üzerinde tut'],
        ['Simge Durumuna Küçült', 'Kapatma yerine sistem tepsisine küçült'],
        ['Dil', 'Arayüz dili'],
        ['Dinamik Arka Plan', 'Arka plan günün saatine göre değişsin'],
        ['Saat Formatı', 'Saat gösterim biçimi']
      ],
      clockOptions: ['24 Saat', '12 Saat']
    },
    pomodoro: {
      groups: ['Zamanlayıcı', 'Bildirimler'],
      rowsTop: [
        ['Otomatik Mola Başlat', 'Çalışma süresi bitince molayı otomatik başlat'],
        ['Otomatik Odaklanma Başlat', 'Mola bitince çalışmayı otomatik başlat'],
        ['Uzun Mola Aralığı', 'Her kaç oturumda bir uzun mola'],
        ['Uzun Mola Süresi', 'Uzun mola kaç dakika sürsün']
      ],
      rowsBottom: [
        ['Bildirim Sesi', 'Süre bitiminde bildirim sesi çal'],
        ['Masaüstü Bildirimi', 'Süre bitiminde sistem bildirimi göster'],
        ["Pomodoro'da Sesleri Durdur", 'Mola sırasında ortam seslerini otomatik duraklat'],
        ['Sayaç Durunca Sesleri Durdur', 'Sayaç durduğunda veya sıfırlandığında ortam seslerini otomatik duraklat']
      ],
      longBreakInterval: ['Kapalı', 'Her 3 oturum', 'Her 4 oturum', 'Her 5 oturum'],
      longBreakDuration: ['15 dakika', '20 dakika', '25 dakika', '30 dakika']
    },
    about: {
      groups: ['Uygulama', 'Lisans ve Kaynaklar', 'Destek'],
      version: 'Sürüm 1.0.0',
      tagline: 'Odaklanma ve Huzur',
      mitTitle: 'MIT Lisansı',
      ossTitle: 'Açık Kaynak Kütüphaneler',
      mitDesc: 'Bu uygulama MIT Lisansı ile dağıtılmaktadır. Kaynak kodu serbestçe kullanılabilir, değiştirilebilir ve dağıtılabilir.',
      ossDesc: '<span class="credit-lib">Electron</span> — Masaüstü uygulama çatısı<br><span class="credit-lib">Inter Font</span> — Google Fonts (OFL Lisansı)<br><span class="credit-lib">Web Audio API</span> — Tarayıcı ses sistemi',
      privacyTitle: 'Gizlilik Notu',
      privacyDesc: 'Prosoche kişisel verilerini buluta göndermez. Ayarlar ve kayıtlı sahneler yalnızca bu cihazda tutulur.',
      feedbackBtn: 'Geri Bildirim Gönder',
      bugBtn: 'Hata Bildir',
      githubBtn: 'GitHub Projesi'
    }
  },
  en: {
    modeClock: 'Clock',
    modePomodoro: 'Pomodoro',
    presets: {
      classicLabel: 'Classic',
      classicDetail: '25/5 · 4 sessions',
      longLabel: 'Long',
      longDetail: '50/10 · 2 sessions',
      customLabel: 'Custom',
      customDetail: 'Your own rules'
    },
    custom: {
      work: 'Work',
      break: 'Break',
      session: 'Session',
      minute: 'min'
    },
    startFocus: 'Start Focus',
    scene: {
      saveTitle: 'Save Scene',
      loadTitle: 'Load Scene'
    },
    settingsBtn: 'Settings',
    settingsTitle: 'Settings',
    tabs: ['General', 'Pomodoro', 'About'],
    general: {
      groups: ['System', 'Appearance'],
      rows: [
        ['Launch on Startup', 'Automatically start app when computer boots'],
        ['Always on Top', 'Keep window above other applications'],
        ['Minimize to Tray', 'Minimize to system tray instead of closing'],
        ['Language', 'Interface language'],
        ['Dynamic Background', 'Change background by time of day'],
        ['Clock Format', 'Time display format']
      ],
      clockOptions: ['24 Hour', '12 Hour']
    },
    pomodoro: {
      groups: ['Timer', 'Notifications'],
      rowsTop: [
        ['Auto Start Break', 'Automatically start break after work session'],
        ['Auto Start Work', 'Automatically start work after break'],
        ['Long Break Interval', 'After how many sessions to take a long break'],
        ['Long Break Duration', 'Duration of long break']
      ],
      rowsBottom: [
        ['Notification Sound', 'Play a notification sound when time ends'],
        ['Desktop Notification', 'Show system notification when time ends'],
        ['Pause Sounds in Pomodoro', 'Automatically pause ambient sounds during break'],
        ['Pause Sounds When Timer Stops', 'Automatically pause ambient sounds when timer is stopped or reset']
      ],
      longBreakInterval: ['Off', 'Every 3 sessions', 'Every 4 sessions', 'Every 5 sessions'],
      longBreakDuration: ['15 minutes', '20 minutes', '25 minutes', '30 minutes']
    },
    about: {
      groups: ['Application', 'Credits and License', 'Support'],
      version: 'Version 1.0.0',
      tagline: 'Focus and Peace',
      mitTitle: 'MIT License',
      ossTitle: 'Open Source Libraries',
      mitDesc: 'This application is distributed under the MIT License. The source code can be freely used, modified, and redistributed.',
      ossDesc: '<span class="credit-lib">Electron</span> — Desktop application framework<br><span class="credit-lib">Inter Font</span> — Google Fonts (OFL License)<br><span class="credit-lib">Web Audio API</span> — Browser audio system',
      privacyTitle: 'Privacy Notice',
      privacyDesc: 'Prosoche does not send your personal data to the cloud. Settings and saved scenes are stored only on this device.',
      feedbackBtn: 'Send Feedback',
      bugBtn: 'Report Bug',
      githubBtn: 'GitHub Repository'
    }
  }
};

function getCurrentLangKey() {
  return appSettings.language === 'en' ? 'en' : 'tr';
}

function getCategoryName(category) {
  const langKey = getCurrentLangKey();
  return CATEGORY_NAMES[langKey][category] || category;
}

function getSoundDisplayName(sound) {
  if (getCurrentLangKey() === 'tr') return sound.name;
  return sound.id
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

function setSettingRowTexts(containerSelector, rows) {
  const rowEls = $$(containerSelector + ' .setting-row');
  rows.forEach((row, index) => {
    if (!rowEls[index]) return;
    const labelEl = rowEls[index].querySelector('.setting-label');
    const descEl = rowEls[index].querySelector('.setting-desc');
    if (labelEl) labelEl.textContent = row[0];
    if (descEl) descEl.textContent = row[1];
  });
}

function setSelectOptions(selectId, texts) {
  const select = $(selectId);
  if (!select) return;
  const opts = select.querySelectorAll('option');
  texts.forEach((txt, i) => {
    if (opts[i]) opts[i].textContent = txt;
  });
}

function applyLanguageToUI() {
  const langKey = getCurrentLangKey();
  const ui = UI_TRANSLATIONS[langKey];

  document.documentElement.lang = langKey;

  $('#mode-clock span').textContent = ui.modeClock;
  $('#mode-pomodoro span').textContent = ui.modePomodoro;

  $('#preset-classic .preset-label').textContent = ui.presets.classicLabel;
  $('#preset-classic .preset-detail').textContent = ui.presets.classicDetail;
  $('#preset-long .preset-label').textContent = ui.presets.longLabel;
  $('#preset-long .preset-detail').textContent = ui.presets.longDetail;
  $('#preset-custom .preset-label').textContent = ui.presets.customLabel;
  $('#preset-custom .preset-detail').textContent = ui.presets.customDetail;

  const customLabels = $$('#custom-settings .custom-field label');
  if (customLabels[0]) customLabels[0].textContent = ui.custom.work;
  if (customLabels[1]) customLabels[1].textContent = ui.custom.break;
  if (customLabels[2]) customLabels[2].textContent = ui.custom.session;

  const customUnits = $$('#custom-settings .custom-unit');
  customUnits.forEach((unit) => {
    unit.textContent = ui.custom.minute;
  });

  $('#start-pomo span').textContent = ui.startFocus;
  $('#save-scene-btn').title = ui.scene.saveTitle;
  $('#load-scene-btn').title = ui.scene.loadTitle;
  $('#settings-btn').title = ui.settingsBtn;
  $('.settings-title').textContent = ui.settingsTitle;

  const tabs = $$('.settings-tab');
  tabs.forEach((tab, i) => {
    if (ui.tabs[i]) tab.textContent = ui.tabs[i];
  });

  const generalGroups = $$('#tab-general .setting-group-title');
  if (generalGroups[0]) generalGroups[0].textContent = ui.general.groups[0];
  if (generalGroups[1]) generalGroups[1].textContent = ui.general.groups[1];
  setSettingRowTexts('#tab-general', ui.general.rows);
  setSelectOptions('#setting-clock-format', ui.general.clockOptions);

  const pomodoroGroups = $$('#tab-pomodoro .setting-group-title');
  if (pomodoroGroups[0]) pomodoroGroups[0].textContent = ui.pomodoro.groups[0];
  if (pomodoroGroups[1]) pomodoroGroups[1].textContent = ui.pomodoro.groups[1];
  setSettingRowTexts('#tab-pomodoro .setting-group:nth-of-type(1)', ui.pomodoro.rowsTop);
  setSettingRowTexts('#tab-pomodoro .setting-group:nth-of-type(2)', ui.pomodoro.rowsBottom);
  setSelectOptions('#setting-long-break-interval', ui.pomodoro.longBreakInterval);
  setSelectOptions('#setting-long-break-duration', ui.pomodoro.longBreakDuration);

  const aboutGroups = $$('#tab-about .setting-group-title');
  if (aboutGroups[0] && ui.about.groups) aboutGroups[0].textContent = ui.about.groups[0];
  if (aboutGroups[1] && ui.about.groups) aboutGroups[1].textContent = ui.about.groups[1];
  if (aboutGroups[2] && ui.about.groups) aboutGroups[2].textContent = ui.about.groups[2];

  const aboutVersion = $('.about-version');
  if (aboutVersion) aboutVersion.textContent = ui.about.version || '';
  const aboutTagline = $('.about-tagline');
  if (aboutTagline) aboutTagline.textContent = ui.about.tagline || '';

  const creditTitles = $$('.credit-title-text');
  if (creditTitles[0]) creditTitles[0].textContent = ui.about.mitTitle || '';
  if (creditTitles[1]) creditTitles[1].textContent = ui.about.ossTitle || '';

  const creditDescs = $$('.credit-desc');
  if (creditDescs[0]) creditDescs[0].textContent = ui.about.mitDesc || '';
  if (creditDescs[1]) creditDescs[1].innerHTML = ui.about.ossDesc || '';

  const privacyTitle = $('#about-privacy-title');
  if (privacyTitle) privacyTitle.textContent = ui.about.privacyTitle || '';

  const privacyDesc = $('#about-privacy-desc');
  if (privacyDesc) privacyDesc.textContent = ui.about.privacyDesc || '';

  const feedbackBtn = $('#about-feedback-btn');
  if (feedbackBtn) feedbackBtn.textContent = ui.about.feedbackBtn || '';

  const bugBtn = $('#about-bug-btn');
  if (bugBtn) bugBtn.textContent = ui.about.bugBtn || '';

  const githubBtn = $('#about-github-btn');
  if (githubBtn) githubBtn.textContent = ui.about.githubBtn || '';

  $$('.cat-btn').forEach((btn) => {
    const category = btn.dataset.category;
    btn.title = getCategoryName(category);
  });

  if (state.openCategory) {
    $('#drawer-title').textContent = getCategoryName(state.openCategory);
    renderDrawerItems(state.openCategory);
  }

}

function getRandomZenQuote() {
  const langKey = getCurrentLangKey();
  const quotes = ZEN_QUOTES[langKey] || ZEN_QUOTES.tr;
  if (!quotes.length) return '';

  let idx = Math.floor(Math.random() * quotes.length);
  if (quotes.length > 1 && idx === state.lastZenQuoteIndex) {
    idx = (idx + 1) % quotes.length;
  }
  state.lastZenQuoteIndex = idx;
  return quotes[idx];
}

function updateZenQuote() {
  const quoteEl = $('#zen-quote');
  if (!quoteEl) return;
  quoteEl.textContent = `"${getRandomZenQuote()}"`;
}

// ===== CLOCK MODULE =====
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const is12 = appSettings.clockFormat === '12';
  const normalizedHours = is12 ? ((hours % 12) || 12) : hours;
  const displayHours = normalizedHours.toString().padStart(2, '0');
  const displayMinutes = minutes.toString().padStart(2, '0');
  const ampmEl = $('#clock-ampm');

  $('#clock-digits').textContent = `${displayHours}:${displayMinutes}`;
  // AM/PM removed - always hidden
  if (ampmEl) {
    ampmEl.classList.add('hidden');
  }

  const lang = TRANSLATIONS[appSettings.language] || TRANSLATIONS.tr;
  
  let greeting = lang.greetings.evening;
  if (hours >= 5 && hours < 12) greeting = lang.greetings.morning;
  else if (hours >= 12 && hours < 18) greeting = lang.greetings.afternoon;
  $('#greeting').textContent = greeting;

  $('#date-display').textContent = `${lang.days[now.getDay()]}, ${now.getDate()} ${lang.months[now.getMonth()]}`;
}

// ===== MODE SWITCHING =====
function switchMode(mode) {
  state.mode = mode;
  $$('.mode-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
  $$('.view').forEach(v => v.classList.remove('active'));
  $(`#${mode}-view`).classList.add('active');
}

// ===== AUDIO NOTIFICATIONS (SYNTHESIZED TING) =====
function playAudioNotification(type) {
  if (!appSettings.notificationSound) return;
  
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.value = 0.25; // Main volume
  
  const now = ctx.currentTime;
  
  // Helper to create a single "ping/ting" harmonic
  const playTing = (freq, startTime, duration, vol, type = 'sine') => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.value = freq;
    
    // Very fast attack, smooth long exponential decay
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(vol, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    
    osc.connect(gain);
    gain.connect(masterGain);
    
    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  };
  
  if (type === 'gong') {
    // Soft, relaxing high-pitched bell for work start
    playTing(660, now, 3, 0.2); // Fundamental (E5)
    playTing(663, now, 3, 0.1); // Beating detune
    playTing(990, now, 2, 0.08); // Overtone (B5)
    playTing(1320, now, 1.5, 0.03); // High harmonic (E6)
  } else if (type === 'chime') {
    // Very gentle, airy chime for break start
    playTing(783.99, now, 2.5, 0.15); // Fundamental (G5)
    playTing(786, now, 2.5, 0.08); // Detune
    playTing(1174.66, now, 1.5, 0.05); // Overtone (D6)
  } else if (type === 'success') {
    // Soft, positive, glassy 3-note arpeggio
    playTing(587.33, now, 1.5, 0.12); // D5
    playTing(783.99, now + 0.15, 2, 0.15); // G5
    playTing(1174.66, now + 0.30, 3, 0.18); // D6 sustained note
  }
}

// ===== POMODORO MODULE =====
function selectPreset(preset) {
  state.preset = preset;
  $$('.preset-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.preset === preset));

  const customPanel = $('#custom-settings');
  if (preset === 'custom') {
    customPanel.classList.remove('hidden');
  } else {
    customPanel.classList.add('hidden');
  }
}

function getPomoConfig() {
  if (state.preset === 'custom') {
    return {
      work: state.customWork,
      break: state.customBreak,
      sessions: state.customSessions,
    };
  }
  return PRESETS[state.preset];
}

function startPomodoro() {
  resumeAmbientAfterBreak();

  if (state.preset === 'custom') {
    state.workDuration = state.customWork * 60;
    state.breakDuration = state.customBreak * 60;
    state.totalSessions = state.customSessions;
  } else {
    const preset = PRESETS[state.preset];
    state.workDuration = preset.work * 60;
    state.breakDuration = preset.break * 60;
    state.totalSessions = preset.sessions;
  }

  state.pomoState = 'running';
  state.timerPhase = 'work';
  state.currentSession = 1;
  state.timeRemaining = state.workDuration;

  // Resume sounds if they were paused by pauseOnStop
  if (appSettings.pauseOnStop) {
    resumeAllSounds();
  }

  $('#pomo-settings').classList.add('hidden');
  $('#pomo-timer').classList.remove('hidden');

  playAudioNotification('gong');
  updateTimerDisplay();
  startTimer();
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  showPlayIcon(false);

  state.timerInterval = setInterval(() => {
    if (state.pomoState !== 'running') return;

    state.timeRemaining--;

    if (state.timeRemaining <= 0) {
      handleTimerComplete();
      return;
    }

    updateTimerDisplay();
  }, 1000);
}

function handleTimerComplete() {
  const lang = TRANSLATIONS[appSettings.language] || TRANSLATIONS.tr;
  
  if (state.timerPhase === 'work') {
    if (state.currentSession >= state.totalSessions) {
      playAudioNotification('success');
      if (appSettings.desktopNotification && window.Notification) {
        new Notification('Prosoche', { body: lang.notifications.allComplete });
      }
      resetPomodoro();
      return;
    }
    
    // Check for long break
    const isLongBreak = appSettings.longBreakInterval > 0 && 
                        (state.currentSession % appSettings.longBreakInterval === 0);
    
    state.timerPhase = 'break';
    state.timeRemaining = isLongBreak ? (appSettings.longBreakDuration * 60) : state.breakDuration;
    
    playAudioNotification('chime');
    if (appSettings.desktopNotification && window.Notification) {
      new Notification('Prosoche', { body: lang.notifications.breakTime });
    }
    
    if (appSettings.pauseOnBreak) {
      pauseAmbientForBreak();
    }

    if (!appSettings.autoBreak) {
      togglePause();
    }
  } else {
    state.currentSession++;
    state.timerPhase = 'work';
    state.timeRemaining = state.workDuration;
    
    resumeAmbientAfterBreak();
    
    playAudioNotification('gong');
    if (appSettings.desktopNotification && window.Notification) {
      new Notification('Prosoche', { body: lang.notifications.workTime });
    }
    
    if (!appSettings.autoWork) {
      togglePause();
    }
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.timeRemaining / 60);
  const seconds = state.timeRemaining % 60;
  $('#timer-digits').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const lang = TRANSLATIONS[appSettings.language] || TRANSLATIONS.tr;
  
  $('#session-info').textContent = `${lang.timer.session} ${state.currentSession} / ${state.totalSessions}`;

  const statusEl = $('#timer-status');
  if (state.timerPhase === 'work') {
    statusEl.textContent = lang.timer.focus;
    statusEl.classList.remove('break-status');
  } else {
    statusEl.textContent = lang.timer.break;
    statusEl.classList.add('break-status');
  }

  // Progress circle
  const totalDuration = state.timerPhase === 'work' ? state.workDuration : state.breakDuration;
  const progress = 1 - (state.timeRemaining / totalDuration);
  const circumference = 2 * Math.PI * 90;
  const offset = circumference * (1 - progress);
  $('#timer-progress').style.strokeDashoffset = offset;
}

function togglePause() {
  if (state.pomoState === 'running') {
    state.pomoState = 'paused';
    if (appSettings.pauseOnStop) {
      pauseAllSounds();
    }
    showPlayIcon(true);
  } else if (state.pomoState === 'paused') {
    state.pomoState = 'running';
    if (appSettings.pauseOnStop) {
      resumeAllSounds();
    }
    showPlayIcon(false);
  }
}

function showPlayIcon(showPlay) {
  const playIcon = $('#ctrl-play .icon-play');
  const pauseIcon = $('#ctrl-play .icon-pause');
  if (showPlay) {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  } else {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  }
}

function resetPomodoro() {
  resumeAmbientAfterBreak();

  state.pomoState = 'idle';
  state.timerPhase = 'work';
  state.currentSession = 1;
  state.timeRemaining = state.workDuration;
  
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  
  // Pause sounds if setting is enabled
  if (appSettings.pauseOnStop) {
    pauseAllSounds();
  }
  
  updateTimerDisplay();
  $('#pomo-settings').classList.remove('hidden');
  $('#pomo-timer').classList.add('hidden');
}

function skipPhase() {
  if (state.pomoState === 'idle') return;
  state.timeRemaining = 0;
  handleTimerComplete();
}

// ==========================================================
// ===== SOUND MODULE — Robust Crossfade Looping ============
// ==========================================================
//
// Strategy: Use Web Audio API with AudioBufferSourceNodes.
// 1. Fetch & decode audio file into an AudioBuffer once.
// 2. Schedule playback using AudioBufferSourceNodes.
// 3. Before the current node ends, schedule the next one
//    with a crossfade overlap (fade-out current, fade-in next).
// This guarantees sample-accurate, gapless looping.
// ==========================================================

let audioContext = null;
const audioBufferCache = {}; // cache decoded buffers by file path

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

async function fetchAudioBuffer(ctx, filePath) {
  if (audioBufferCache[filePath]) {
    return audioBufferCache[filePath];
  }
  const response = await fetch(filePath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
  audioBufferCache[filePath] = audioBuffer;
  return audioBuffer;
}

function toggleSound(soundId, soundFile) {
  if (state.activeSounds[soundId]) {
    stopSound(soundId);
    return;
  }
  playSound(soundId, soundFile);
}

async function playSound(soundId, soundFile) {
  if (state.pomoState === 'idle' && state.soundPauseReasons.stop) {
    resumeAllSounds();
  }

  const ctx = getAudioContext();

  let buffer;
  try {
    buffer = await fetchAudioBuffer(ctx, soundFile);
  } catch (e) {
    console.error('Failed to load sound:', soundFile, e);
    return;
  }

  // Master gain for this sound (user volume control)
  const masterGain = ctx.createGain();
  const defaultVolume = 0.5;
  masterGain.gain.value = defaultVolume * getMasterVolumeFactor();
  masterGain.connect(ctx.destination);

  const soundState = {
    buffer,
    masterGain,
    volume: defaultVolume,
    file: soundFile,
    stopped: false,
    activeNodes: [], // track {source, gain} pairs for cleanup
  };

  state.activeSounds[soundId] = soundState;

  if (hasActiveSoundPauseReason()) {
    ensurePauseSnapshot();
    state.pausedSoundVolumes[soundId] = defaultVolume * getMasterVolumeFactor();
    soundState.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
  }

  // Schedule the first playback
  schedulePlayback(ctx, soundState, 0);

  updateSoundUI();
}

function schedulePlayback(ctx, soundState, startDelay) {
  if (soundState.stopped) return;

  const buffer = soundState.buffer;
  const duration = buffer.duration;
  const CROSSFADE = Math.max(0.8, Math.min(6, appSettings.crossfade));

  // Create source + individual gain for this iteration
  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const iterGain = ctx.createGain();
  source.connect(iterGain);
  iterGain.connect(soundState.masterGain);

  const startTime = ctx.currentTime + startDelay;

  // Fade in at the beginning
  iterGain.gain.setValueAtTime(0, startTime);
  iterGain.gain.linearRampToValueAtTime(1, startTime + CROSSFADE);

  // Fade out before the end
  const fadeOutStart = startTime + duration - CROSSFADE;
  if (fadeOutStart > startTime + CROSSFADE) {
    iterGain.gain.setValueAtTime(1, fadeOutStart);
    iterGain.gain.linearRampToValueAtTime(0, fadeOutStart + CROSSFADE);
  }

  source.start(startTime);
  source.stop(startTime + duration);

  const nodeRef = { source, gain: iterGain };
  soundState.activeNodes.push(nodeRef);

  // Cleanup reference when ended
  source.onended = () => {
    const idx = soundState.activeNodes.indexOf(nodeRef);
    if (idx !== -1) soundState.activeNodes.splice(idx, 1);
  };

  // Schedule the NEXT iteration to start just as the fade-out begins
  // so both overlap by CROSSFADE seconds
  const nextDelay = startDelay + duration - CROSSFADE;
  if (nextDelay < 0.1) {
    // safety guard for very short files
    setTimeout(() => {
      if (!soundState.stopped) schedulePlayback(ctx, soundState, 0);
    }, (duration * 1000) - 500);
  } else {
    // Use setTimeout for reliability (avoids drift issues with very long schedules)
    const msUntilNext = nextDelay * 1000;
    setTimeout(() => {
      if (!soundState.stopped) schedulePlayback(ctx, soundState, 0);
    }, msUntilNext);
  }
}

function stopSound(soundId) {
  const sound = state.activeSounds[soundId];
  if (!sound) return;

  sound.stopped = true;

  const ctx = getAudioContext();
  const now = ctx.currentTime;
  const fadeOut = 0.4;

  // Fade out master gain
  sound.masterGain.gain.setValueAtTime(sound.masterGain.gain.value, now);
  sound.masterGain.gain.linearRampToValueAtTime(0, now + fadeOut);

  // Stop all active sources after fade
  setTimeout(() => {
    sound.activeNodes.forEach(({ source }) => {
      try { source.stop(); } catch (e) {}
    });
    try { sound.masterGain.disconnect(); } catch (e) {}
    sound.activeNodes = [];
  }, fadeOut * 1000 + 100);

  delete state.activeSounds[soundId];
  if (state.pausedSoundVolumes) {
    delete state.pausedSoundVolumes[soundId];
  }
  updateSoundUI();
}

function setSoundVolume(soundId, volume) {
  const sound = state.activeSounds[soundId];
  if (!sound) return;

  sound.volume = volume;
  const ctx = getAudioContext();
  const target = volume * getMasterVolumeFactor();

  if (hasActiveSoundPauseReason()) {
    ensurePauseSnapshot();
    state.pausedSoundVolumes[soundId] = target;
    sound.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    return;
  }

  sound.masterGain.gain.setValueAtTime(target, ctx.currentTime);
}

function pauseAmbientForBreak() {
  setSoundPauseReason('break', true);
}

function resumeAmbientAfterBreak() {
  setSoundPauseReason('break', false);
}

function updateSoundUI() {
  $$('.cat-btn').forEach(btn => {
    const cat = btn.dataset.category;
    const sounds = SOUND_DB[cat] || [];
    const hasPlaying = sounds.some(s => state.activeSounds[s.id]);
    btn.classList.toggle('has-playing', hasPlaying);
  });

  if (state.openCategory) {
    const drawer = $('#drawer-sounds');
    if (drawer) {
      drawer.querySelectorAll('.sound-item-row').forEach(row => {
        const id = row.dataset.soundId;
        const isPlaying = !!state.activeSounds[id];
        row.classList.toggle('playing', isPlaying);
        
        const svg = row.querySelector('.sound-toggle');
        if (svg) {
          svg.innerHTML = isPlaying
            ? '<rect x="5" y="3" width="4" height="18" rx="1"/><rect x="15" y="3" width="4" height="18" rx="1"/>'
            : '<polygon points="6,3 20,12 6,21"/>';
          svg.setAttribute('fill', isPlaying ? 'currentColor' : 'none');
        }
        
        const volWrap = row.parentElement.querySelector('.sound-volume-wrap');
        if (volWrap) {
          if (isPlaying) {
            volWrap.classList.add('visible');
            volWrap.querySelector('input').value = state.activeSounds[id].volume;
          } else {
            volWrap.classList.remove('visible');
          }
        }
      });
    }
  }
}

// ===== SETTINGS MODULE =====
function initSettingsUI() {
  $('#settings-btn').addEventListener('click', () => {
    $('#settings-overlay').classList.remove('hidden');
  });

  $('#settings-close').addEventListener('click', () => {
    $('#settings-overlay').classList.add('hidden');
  });

  const settingsContent = $('.settings-content');
  if (settingsContent) {
    settingsContent.addEventListener('wheel', (e) => {
      settingsContent.scrollTop += e.deltaY;
      e.preventDefault();
    }, { passive: false });
  }

  $$('.settings-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.settings-tab').forEach(t => t.classList.remove('active'));
      $$('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      $(`#tab-${tab.dataset.tab}`).classList.add('active');
    });
  });

  // Load from IPC
  if (window.electronAPI) {
    window.electronAPI.onSettingsLoaded((savedSettings) => {
      Object.assign(appSettings, savedSettings);
      applySettingsToUI();
      applySettingsToApp();
      applyLanguageToUI();
      updateDynamicBackground();
      updateClock();
      updateTimerDisplay();
      updateZenQuote();
    });
  } else {
    applySettingsToUI();
    applySettingsToApp(); // Fallback for browser
    applyLanguageToUI();
    updateDynamicBackground();
    updateClock();
    updateTimerDisplay();
    updateZenQuote();
  }

  // Bind UI changes
  const bindToggle = (id, key) => {
    $(`#${id}`).addEventListener('change', (e) => {
      appSettings[key] = e.target.checked;
      saveSettings();
    });
  };

  const bindSelect = (id, key, parse = false) => {
    $(`#${id}`).addEventListener('change', (e) => {
      appSettings[key] = parse ? parseFloat(e.target.value) : e.target.value;
      saveSettings();
      if (key === 'language') {
        applyLanguageToUI();
        updateClock();
        updateTimerDisplay();
        updateZenQuote();
      }
    });
  };

  const bindToggleWithCallback = (id, key, callback) => {
    $(`#${id}`).addEventListener('change', (e) => {
      appSettings[key] = e.target.checked;
      saveSettings();
      if (callback) callback(e.target.checked);
    });
  };

  bindToggleWithCallback('setting-dynamic-bg', 'dynamicBackground', updateDynamicBackground);

  bindToggle('setting-autostart', 'autostart');
  bindToggle('setting-always-on-top', 'alwaysOnTop');
  bindToggle('setting-minimize-to-tray', 'minimizeToTray');
  bindSelect('setting-language', 'language');
  bindSelect('setting-clock-format', 'clockFormat');

  bindToggle('setting-auto-break', 'autoBreak');
  bindToggle('setting-auto-work', 'autoWork');
  bindSelect('setting-long-break-interval', 'longBreakInterval', true);
  bindSelect('setting-long-break-duration', 'longBreakDuration', true);

  bindToggle('setting-notification-sound', 'notificationSound');
  bindToggle('setting-desktop-notification', 'desktopNotification');

  bindToggleWithCallback('setting-pause-on-break', 'pauseOnBreak', (enabled) => {
    if (enabled && state.pomoState !== 'idle' && state.timerPhase === 'break') {
      pauseAmbientForBreak();
      return;
    }

    if (!enabled) {
      resumeAmbientAfterBreak();
    }
  });

  bindToggleWithCallback('setting-pause-on-stop', 'pauseOnStop', (enabled) => {
    if (!enabled) {
      resumeAllSounds();
    }
  });
}

function applySettingsToUI() {
  $('#setting-autostart').checked = appSettings.autostart;
  $('#setting-always-on-top').checked = appSettings.alwaysOnTop;
  $('#setting-minimize-to-tray').checked = appSettings.minimizeToTray;
  $('#setting-language').value = appSettings.language;
  $('#setting-clock-format').value = appSettings.clockFormat;

  $('#setting-auto-break').checked = appSettings.autoBreak;
  $('#setting-auto-work').checked = appSettings.autoWork;
  $('#setting-long-break-interval').value = appSettings.longBreakInterval.toString();
  $('#setting-long-break-duration').value = appSettings.longBreakDuration.toString();

  $('#setting-notification-sound').checked = appSettings.notificationSound;
  $('#setting-desktop-notification').checked = appSettings.desktopNotification;

  $('#setting-pause-on-break').checked = appSettings.pauseOnBreak;
  $('#setting-pause-on-stop').checked = appSettings.pauseOnStop;

  $('#setting-dynamic-bg').checked = appSettings.dynamicBackground;
  $('#quick-master-volume').value = appSettings.masterVolume;
  $('#quick-master-volume-val').textContent = appSettings.masterVolume + '%';
}

function applySettingsToApp() {
  if (window.electronAPI) {
    window.electronAPI.setAutoLaunch(appSettings.autostart);
    window.electronAPI.setAlwaysOnTop(appSettings.alwaysOnTop);
    window.electronAPI.setMinimizeToTray(appSettings.minimizeToTray);
  }
}

function saveSettings() {
  applySettingsToApp();
  if (window.electronAPI) {
    window.electronAPI.saveSettings(appSettings);
  }
}

// ===== SOUND DRAWER =====
function openDrawer(category) {
  if (state.openCategory === category) {
    closeDrawer();
    return;
  }
  state.openCategory = category;

  $$('.cat-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.category === category));

  const drawer = $('#sound-drawer');
  const title = $('#drawer-title');
  title.textContent = getCategoryName(category);

  renderDrawerItems(category);
  drawer.classList.remove('hidden');
}

function renderDrawerItems(category) {
  const container = $('#drawer-sounds');
  const sounds = SOUND_DB[category] || [];

  container.innerHTML = sounds.map(sound => {
    const isPlaying = !!state.activeSounds[sound.id];
    const volume = isPlaying ? state.activeSounds[sound.id].volume : 0.5;
    return `
      <div class="sound-item" data-sound-id="${sound.id}">
        <div class="sound-item-row ${isPlaying ? 'playing' : ''}" data-sound-id="${sound.id}" data-file="${sound.file}">
          <span class="sound-name">${getSoundDisplayName(sound)}</span>
          <svg class="sound-toggle" viewBox="0 0 24 24" fill="${isPlaying ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
            ${isPlaying
              ? '<rect x="5" y="3" width="4" height="18" rx="1"/><rect x="15" y="3" width="4" height="18" rx="1"/>'
              : '<polygon points="6,3 20,12 6,21"/>'}
          </svg>
        </div>
        <div class="sound-volume-wrap ${isPlaying ? 'visible' : ''}">
          <input type="range" class="sound-volume" min="0" max="1" step="0.01" value="${volume}" data-sound-id="${sound.id}">
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.sound-item-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.dataset.soundId;
      const file = row.dataset.file;
      toggleSound(id, file);
    });
  });

  container.querySelectorAll('.sound-volume').forEach(slider => {
    slider.addEventListener('input', (e) => {
      e.stopPropagation();
      const id = slider.dataset.soundId;
      setSoundVolume(id, parseFloat(slider.value));
    });
    slider.addEventListener('click', (e) => e.stopPropagation());
  });
}

function closeDrawer() {
  state.openCategory = null;
  $('#sound-drawer').classList.add('hidden');
  $$('.cat-btn').forEach(btn => btn.classList.remove('active'));
}

// ===== CUSTOM VALUE ADJUSTMENT =====
function applyCustomValue(targetId, rawValue) {
  const sanitized = String(rawValue ?? '').replace(/\D+/g, '');
  let val = parseInt(sanitized, 10);

  if (targetId === 'custom-work') {
    if (Number.isNaN(val)) val = state.customWork;
    val = Math.max(1, Math.min(120, val));
    state.customWork = val;
  } else if (targetId === 'custom-break') {
    if (Number.isNaN(val)) val = state.customBreak;
    val = Math.max(1, Math.min(60, val));
    state.customBreak = val;
  } else if (targetId === 'custom-sessions') {
    if (Number.isNaN(val)) val = state.customSessions;
    val = Math.max(1, Math.min(12, val));
    state.customSessions = val;
  }

  const el = $(`#${targetId}`);
  if (el) el.value = val;
  return val;
}

function adjustValue(targetId, direction) {
  const el = $(`#${targetId}`);
  let val = parseInt(el.value, 10);
  if (Number.isNaN(val)) val = applyCustomValue(targetId, NaN);
  val += direction;
  applyCustomValue(targetId, val);
}

function sanitizeCustomInputValue(inputEl) {
  const sanitized = inputEl.value.replace(/\D+/g, '');
  if (inputEl.value !== sanitized) {
    inputEl.value = sanitized;
  }
}

// ===== SCENE MANAGEMENT =====
function loadScenes() {
  try {
    const saved = localStorage.getItem('prosoche_scenes');
    state.savedScenes = saved ? JSON.parse(saved) : [];
  } catch (e) {
    state.savedScenes = [];
  }
}

function saveScenes() {
  try {
    localStorage.setItem('prosoche_scenes', JSON.stringify(state.savedScenes));
  } catch (e) {}
}

function getCurrentScene() {
  const scene = {
    sounds: {}
  };
  Object.keys(state.activeSounds).forEach(id => {
    scene.sounds[id] = state.activeSounds[id].volume;
  });
  return scene;
}

function applyScene(scene) {
  Object.keys(state.activeSounds).forEach(id => {
    stopSound(id);
  });
  
  Object.keys(scene.sounds).forEach(id => {
    const sound = findSoundById(id);
    if (sound) {
      playSound(id, sound.file);
      setTimeout(() => {
        setSoundVolume(id, scene.sounds[id]);
      }, 100);
    }
  });
}

function findSoundById(id) {
  for (const category in SOUND_DB) {
    const sound = SOUND_DB[category].find(s => s.id === id);
    if (sound) return sound;
  }
  return null;
}

function openSaveSceneModal() {
  const modal = $('#scene-modal');
  const title = $('#scene-modal-title');
  const body = $('#scene-modal-body');
  
  const lang = TRANSLATIONS[appSettings.language] || TRANSLATIONS.tr;
  title.textContent = lang === TRANSLATIONS.tr ? 'Sahneyi Kaydet' : 'Save Scene';
  
  body.innerHTML = `
    <div class="scene-input-group">
      <label>${lang === TRANSLATIONS.tr ? 'Sahne Adı' : 'Scene Name'}</label>
      <input type="text" id="scene-name-input" placeholder="${lang === TRANSLATIONS.tr ? 'Örn: Gece Çalışması' : 'e.g. Night Study'}" />
    </div>
    <button class="scene-save-btn" id="confirm-save-scene">${lang === TRANSLATIONS.tr ? 'Kaydet' : 'Save'}</button>
  `;
  
  modal.classList.remove('hidden');
  
  $('#confirm-save-scene').addEventListener('click', () => {
    const name = $('#scene-name-input').value.trim();
    if (!name) return;
    
    const scene = getCurrentScene();
    state.savedScenes.push({ name, scene });
    saveScenes();
    modal.classList.add('hidden');
  });
}

function openLoadSceneModal() {
  const modal = $('#scene-modal');
  const title = $('#scene-modal-title');
  const body = $('#scene-modal-body');
  
  const lang = TRANSLATIONS[appSettings.language] || TRANSLATIONS.tr;
  title.textContent = lang === TRANSLATIONS.tr ? 'Sahne Yükle' : 'Load Scene';
  
  if (state.savedScenes.length === 0) {
    body.innerHTML = `<p style="color: var(--text-secondary); text-align: center;">${lang === TRANSLATIONS.tr ? 'Kaydedilmiş sahne yok' : 'No saved scenes'}</p>`;
  } else {
    body.innerHTML = `
      <div class="scene-list">
        ${state.savedScenes.map((item, index) => `
          <div class="scene-item" data-index="${index}">
            <span class="scene-item-name">${escapeHtml(item.name)}</span>
            <div class="scene-item-actions">
              <button class="scene-item-btn load-scene" data-index="${index}">${lang === TRANSLATIONS.tr ? 'Yükle' : 'Load'}</button>
              <button class="scene-item-btn delete-scene" data-index="${index}">${lang === TRANSLATIONS.tr ? 'Sil' : 'Delete'}</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    $$('.load-scene').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        applyScene(state.savedScenes[index].scene);
        modal.classList.add('hidden');
      });
    });
    
    $$('.delete-scene').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        state.savedScenes.splice(index, 1);
        saveScenes();
        openLoadSceneModal();
      });
    });
  }
  
  modal.classList.remove('hidden');
}

// ===== DYNAMIC BACKGROUND =====
const THEME_TRANSITION_MS = 6000;
const THEME_TRANSITION_DELAY_MS = 450;
const THEME_CLASSES = ['time-morning', 'time-afternoon', 'time-evening', 'time-night'];
let activeThemeOverlay = null;

const THEME_OVERLAY_BACKGROUNDS = {
  'time-morning': `
    radial-gradient(ellipse at 50% 40%, #2a3a5a 0%, #1a2540 35%, #0f1828 70%, #080d18 100%),
    radial-gradient(ellipse at 30% 20%, rgba(100, 120, 180, 0.35) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 60%, rgba(80, 100, 150, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 65% 25%, rgba(90, 110, 160, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 25% 70%, rgba(70, 90, 140, 0.25) 0%, transparent 55%)
  `,
  'time-afternoon': `
    radial-gradient(ellipse at 50% 40%, #3a4a6a 0%, #2a3550 35%, #1a2238 70%, #0d1220 100%),
    radial-gradient(ellipse at 30% 20%, rgba(120, 140, 200, 0.35) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 60%, rgba(100, 120, 170, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 65% 25%, rgba(110, 130, 180, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 25% 70%, rgba(90, 110, 160, 0.25) 0%, transparent 55%)
  `,
  'time-evening': `
    radial-gradient(ellipse at 50% 40%, #2a2050 0%, #1a1540 35%, #100d28 70%, #080618 100%),
    radial-gradient(ellipse at 30% 20%, rgba(100, 60, 160, 0.35) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 60%, rgba(80, 50, 140, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 65% 25%, rgba(90, 55, 150, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 25% 70%, rgba(70, 45, 130, 0.25) 0%, transparent 55%)
  `,
  'time-night': `
    radial-gradient(ellipse at 50% 40%, #1a1245 0%, #0d0b2e 35%, #080816 70%, #050510 100%),
    radial-gradient(ellipse at 30% 20%, rgba(80, 40, 140, 0.35) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 60%, rgba(20, 50, 120, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 65% 25%, rgba(50, 20, 100, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 25% 70%, rgba(30, 60, 130, 0.25) 0%, transparent 55%)
  `,
};

function removeThemeOverlay() {
  if (activeThemeOverlay && activeThemeOverlay.parentNode) {
    activeThemeOverlay.parentNode.removeChild(activeThemeOverlay);
  }
  activeThemeOverlay = null;
}

function setThemeClass(themeClass) {
  THEME_CLASSES.forEach(cls => document.body.classList.remove(cls));
  if (themeClass) document.body.classList.add(themeClass);
}

function applyThemeWithTransition(themeClass) {
  const currentTheme = THEME_CLASSES.find(cls => document.body.classList.contains(cls)) || '';
  if (currentTheme === themeClass) return;

  removeThemeOverlay();

  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.pointerEvents = 'none';
  overlay.style.zIndex = '0';
  overlay.style.opacity = '0';
  overlay.style.transition = `opacity ${THEME_TRANSITION_MS / 2}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
  overlay.style.background = THEME_OVERLAY_BACKGROUNDS[themeClass] || THEME_OVERLAY_BACKGROUNDS['time-night'];
  overlay.style.transform = 'scale(1.04)';

  document.body.appendChild(overlay);
  activeThemeOverlay = overlay;

  requestAnimationFrame(() => {
    window.setTimeout(() => {
      overlay.style.opacity = '1';
    }, THEME_TRANSITION_DELAY_MS);
  });

  const fadeInTotal = THEME_TRANSITION_DELAY_MS + THEME_TRANSITION_MS / 2;

  window.setTimeout(() => {
    setThemeClass(themeClass);
    overlay.style.transition = `opacity ${THEME_TRANSITION_MS / 2}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
    overlay.style.opacity = '0';
    window.setTimeout(() => {
      if (activeThemeOverlay === overlay) {
        removeThemeOverlay();
      }
    }, THEME_TRANSITION_MS / 2 + 150);
  }, fadeInTotal);
}

function getTimeThemeClassByHour(hour) {
  if (hour >= 5 && hour < 12) return 'time-morning';
  if (hour >= 12 && hour < 18) return 'time-afternoon';
  if (hour >= 18 && hour < 22) return 'time-evening';
  return 'time-night';
}

function updateDynamicBackground() {
  if (!appSettings.dynamicBackground) {
    applyThemeWithTransition('time-morning');
    return;
  }

  applyThemeWithTransition(getTimeThemeClassByHour(new Date().getHours()));
}

// ===== WEATHER SYNC =====
async function fetchWeather() {
  if (!appSettings.weatherSync) return;
  
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current_weather=true');
    const data = await response.json();
    state.weatherData = data.current_weather;
    
    if (state.weatherData.weathercode >= 51 && state.weatherData.weathercode <= 67) {
      createRainEffect();
    } else {
      removeRainEffect();
    }
  } catch (e) {
    console.log('Weather fetch failed');
  }
}

function createRainEffect() {
  let rainContainer = $('#weather-rain');
  if (!rainContainer) {
    rainContainer = document.createElement('div');
    rainContainer.id = 'weather-rain';
    rainContainer.className = 'weather-rain';
    document.body.appendChild(rainContainer);
  }
  
  rainContainer.innerHTML = '';
  
  for (let i = 0; i < 50; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    rainContainer.appendChild(drop);
  }
}

function removeRainEffect() {
  const rainContainer = $('#weather-rain');
  if (rainContainer) {
    rainContainer.remove();
  }
}

// ===== EVENT LISTENERS =====
function initEvents() {
  if (window.electronAPI) {
    $('#btn-minimize').addEventListener('click', () => window.electronAPI.minimize());
    $('#btn-maximize').addEventListener('click', () => window.electronAPI.maximize());
    $('#btn-close').addEventListener('click', () => window.electronAPI.close());
  }

  $$('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });

  $$('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => selectPreset(btn.dataset.preset));
  });

  $$('.adj-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      adjustValue(btn.dataset.target, parseInt(btn.dataset.dir));
    });
  });

  ['custom-work', 'custom-break', 'custom-sessions'].forEach((id) => {
    const input = $(`#${id}`);
    if (!input) return;

    input.addEventListener('keydown', (e) => {
      const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];
      if (allowedKeys.includes(e.key) || (e.ctrlKey || e.metaKey)) return;
      if (!/^\d$/.test(e.key)) {
        e.preventDefault();
      }
    });

    input.addEventListener('input', () => {
      sanitizeCustomInputValue(input);
    });

    input.addEventListener('change', () => {
      applyCustomValue(id, input.value);
    });

    input.addEventListener('blur', () => {
      applyCustomValue(id, input.value);
    });
  });

  $('#start-pomo').addEventListener('click', startPomodoro);

  $('#ctrl-play').addEventListener('click', () => {
    if (state.pomoState === 'idle') {
      startPomodoro();
    } else {
      togglePause();
    }
  });

  $('#ctrl-reset').addEventListener('click', resetPomodoro);
  $('#ctrl-skip').addEventListener('click', skipPhase);

  $$('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => openDrawer(btn.dataset.category));
  });

  $('#drawer-close').addEventListener('click', closeDrawer);

  $('#save-scene-btn').addEventListener('click', openSaveSceneModal);
  $('#load-scene-btn').addEventListener('click', openLoadSceneModal);
  $('#scene-modal-close').addEventListener('click', () => {
    $('#scene-modal').classList.add('hidden');
  });

  // Master volume controls
  $('#master-volume-toggle').addEventListener('click', () => {
    $('#master-volume-panel').classList.toggle('hidden');
  });

  const quickVolSlider = $('#quick-master-volume');
  const quickVolVal = $('#quick-master-volume-val');
  quickVolSlider.addEventListener('input', (e) => {
    appSettings.masterVolume = parseInt(e.target.value);
    quickVolVal.textContent = appSettings.masterVolume + '%';
    applyMasterVolumeToActiveSounds();
  });
  quickVolSlider.addEventListener('change', () => saveSettings());

  $('#stop-all-sounds-btn').addEventListener('click', () => {
    Object.keys(state.activeSounds).forEach(soundId => {
      stopSound(soundId);
    });
    updateSoundUI();
  });

  const feedbackBtn = $('#about-feedback-btn');
  if (feedbackBtn) {
    feedbackBtn.addEventListener('click', () => {
      const isEn = getCurrentLangKey() === 'en';
      const subject = encodeURIComponent(isEn ? 'Prosoche Feedback' : 'Prosoche Geri Bildirim');
      const body = encodeURIComponent(
        isEn
          ? 'Hi Onur,\n\nMy feedback:\n\n'
          : 'Merhaba Onur,\n\nGeri bildirimim:\n\n'
      );
      openExternalUrl(`mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`);
    });
  }

  const bugBtn = $('#about-bug-btn');
  if (bugBtn) {
    bugBtn.addEventListener('click', () => {
      openExternalUrl(GITHUB_BUG_URL);
    });
  }

  const githubBtn = $('#about-github-btn');
  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      openExternalUrl(GITHUB_REPO_URL);
    });
  }

  document.addEventListener('click', (e) => {
    if (state.openCategory) {
      // Use composedPath to check true origin of click before DOM modifications remove it
      const path = e.composedPath();
      const clickedDrawer = path.some(el => el.classList && el.classList.contains('sound-drawer'));
      const clickedCatBtn = path.some(el => el.classList && el.classList.contains('cat-btn'));
      
      if (!clickedDrawer && !clickedCatBtn) {
        closeDrawer();
      }
    }
    
    // Check master volume panel click-outside
    const masterPanel = $('#master-volume-panel');
    if (!masterPanel.classList.contains('hidden')) {
      const path = e.composedPath();
      const clickedPanel = path.some(el => el.id === 'master-volume-panel');
      const clickedToggle = path.some(el => el.id === 'master-volume-toggle');
      
      if (!clickedPanel && !clickedToggle) {
        masterPanel.classList.add('hidden');
      }
    }
    
    // Check settings overlay click
    if (e.target.id === 'settings-overlay') {
      $('#settings-overlay').classList.add('hidden');
    }
  });
}

// ===== INIT =====
function init() {
  // Init permissions
  if (window.Notification && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
    Notification.requestPermission();
  }

  // Load saved scenes
  loadScenes();

  // Initialize weather sync
  if (appSettings.weatherSync) {
    fetchWeather();
    setInterval(fetchWeather, 1800000); // Update every 30 minutes
  }

  updateClock();
  setInterval(updateClock, 1000);
  initEvents();
  initSettingsUI();
  updateDynamicBackground();
  setInterval(updateDynamicBackground, 60000); // Update every minute
  applyLanguageToUI();
  updateZenQuote();
}

document.addEventListener('DOMContentLoaded', init);
