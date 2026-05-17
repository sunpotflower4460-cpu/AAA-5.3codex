import { useEffect, useMemo, useRef, useState } from 'react';
import { AppShell } from './components/AppShell';
import { NoteEditor } from './components/NoteEditor';
import { NotesList } from './components/NotesList';
import { copy } from './lib/i18n';
import { loadNotes, saveNotes } from './lib/storage';
import type { Note } from './types/note';

const createNote = (): Note => {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    title: '',
    body: '',
    createdAt: now,
    updatedAt: now,
    isFavorite: false,
    locale: 'ja',
  };
};

function App() {
  const [notes, setNotes] = useState<Note[]>(() => loadNotes());
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const hasInitializedSave = useRef(false);

  useEffect(() => {
    const saveTimeoutId = window.setTimeout(() => {
      saveNotes(notes);
      if (hasInitializedSave.current) {
        setShowSaved(true);
      } else {
        hasInitializedSave.current = true;
      }
    }, 400);

    return () => window.clearTimeout(saveTimeoutId);
  }, [notes]);

  useEffect(() => {
    if (!showSaved) {
      return;
    }

    const hideTimeoutId = window.setTimeout(() => setShowSaved(false), 2500);
    return () => window.clearTimeout(hideTimeoutId);
  }, [showSaved]);

  const filteredNotes = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notes
      .filter((note) => !favoriteOnly || note.isFavorite)
      .filter((note) => {
        if (!query) {
          return true;
        }

        return note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query);
      })
      .sort((a, b) => {
        if (a.isFavorite !== b.isFavorite) {
          return Number(b.isFavorite) - Number(a.isFavorite);
        }

        return b.updatedAt.localeCompare(a.updatedAt);
      });
  }, [favoriteOnly, notes, search]);

  const activeNote = notes.find((note) => note.id === activeNoteId) ?? null;

  const handleCreate = () => {
    const newNote = createNote();
    setNotes((prev) => [newNote, ...prev]);
    setActiveNoteId(newNote.id);
  };

  const handleOpen = (noteId: string) => {
    setActiveNoteId(noteId);
  };

  const handleUpdate = (noteId: string, updates: Pick<Note, 'title' | 'body'>) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteId
          ? {
              ...note,
              ...updates,
              updatedAt: new Date().toISOString(),
            }
          : note,
      ),
    );
  };

  const handleToggleFavorite = (noteId: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteId
          ? {
              ...note,
              isFavorite: !note.isFavorite,
              updatedAt: new Date().toISOString(),
            }
          : note,
      ),
    );
  };

  const handleDelete = (noteId: string) => {
    if (!window.confirm(copy.deleteConfirm)) {
      return;
    }

    setNotes((prev) => prev.filter((note) => note.id !== noteId));
    setActiveNoteId((current) => (current === noteId ? null : current));
  };

  return (
    <AppShell>
      {activeNote ? (
        <NoteEditor
          note={activeNote}
          showSaved={showSaved}
          onBack={() => setActiveNoteId(null)}
          onChange={handleUpdate}
          onDelete={handleDelete}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <NotesList
          notes={filteredNotes}
          search={search}
          favoriteOnly={favoriteOnly}
          onSearch={setSearch}
          onFavoriteFilterToggle={() => setFavoriteOnly((prev) => !prev)}
          onCreate={handleCreate}
          onOpen={handleOpen}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </AppShell>
  );
}

export default App;
