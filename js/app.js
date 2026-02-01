import { watchSessions } from './storage.js';
import { initUI, renderApp, state, updateSyncIndicator } from './ui.js';

// Init UI event listeners
initUI();

let unsubscribeWatcher = null;

export async function init() {
  // LocalStorage version - no auth needed
  state.currentUser = { uid: 'local-user' }; // Dummy user for compatibility
  unsubscribeWatcher = watchSessions(null, (data) => { state.sessions = data; state.firestoreError = null; renderApp(); }, (err) => { console.error('watchSessions error', err); state.firestoreError = err.message || String(err); renderApp(); });
  document.getElementById('loading-screen').classList.add('hidden');
  updateSyncIndicator();
}

// Auto-init
init();

// Register a service worker (PWA offline support)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(reg => console.log('ServiceWorker registered:', reg.scope))
      .catch(err => console.warn('SW registration failed', err));
  });
}

// Friendly export for debugging
export default { init };
