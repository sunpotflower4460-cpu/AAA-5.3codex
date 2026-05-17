import type { Note } from '../types/note';

const STORAGE_KEY = 'zanshin.notes.v1';

const isLocale = (value: unknown): value is Note['locale'] => value === undefined || value === 'ja' || value === 'en';

const isNote = (value: unknown): value is Note => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const note = value as Record<string, unknown>;
  return (
    typeof note.id === 'string' &&
    typeof note.title === 'string' &&
    typeof note.body === 'string' &&
    typeof note.createdAt === 'string' &&
    typeof note.updatedAt === 'string' &&
    typeof note.isFavorite === 'boolean' &&
    isLocale(note.locale)
  );
};

export const loadNotes = (): Note[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isNote).map((note) => ({ ...note }));
  } catch {
    return [];
  }
};

export const saveNotes = (notes: Note[]): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {
    // Ignore storage write failures in MVP.
  }
};
