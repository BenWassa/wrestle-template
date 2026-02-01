// LocalStorage-based storage for offline PWA version

const STORAGE_KEY = 'wrestle-sessions';

function getSessions() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Failed to load sessions from localStorage', err);
    return [];
  }
}

function saveSessions(sessions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  } catch (err) {
    console.error('Failed to save sessions to localStorage', err);
  }
}

export function watchSessions(uid, onUpdate, onError) {
  // For localStorage, no real-time updates, just load once
  const data = getSessions();
  if (onUpdate) onUpdate(data);
  // Return a no-op unsubscribe function
  return () => {};
}

export function addSession(uid, newSession) {
  const sessions = getSessions();
  const session = { ...newSession, id: `local-${Date.now()}-${Math.random()}`, createdAt: Date.now() };
  sessions.unshift(session); // Add to beginning for desc order
  saveSessions(sessions);
  return Promise.resolve({ id: session.id });
}

export function deleteSession(uid, id) {
  const sessions = getSessions();
  const filtered = sessions.filter(s => s.id !== id);
  saveSessions(filtered);
  return Promise.resolve({ deleted: true });
}

// No sync needed for localStorage
export async function syncQueuedWrites(uid) {
  return Promise.resolve({ synced: 0 });
}

export function getQueuedCount(uid) {
  return 0; // No queue in localStorage version
}
