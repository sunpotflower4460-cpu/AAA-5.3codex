import { copy } from '../lib/i18n';
import type { Note } from '../types/note';
import { EmptyState } from './EmptyState';
import { NoteCard } from './NoteCard';
import { SearchBar } from './SearchBar';

type NotesListProps = {
  notes: Note[];
  search: string;
  favoriteOnly: boolean;
  onSearch: (value: string) => void;
  onFavoriteFilterToggle: () => void;
  onCreate: () => void;
  onOpen: (noteId: string) => void;
  onToggleFavorite: (noteId: string) => void;
};

export function NotesList({
  notes,
  search,
  favoriteOnly,
  onSearch,
  onFavoriteFilterToggle,
  onCreate,
  onOpen,
  onToggleFavorite,
}: NotesListProps) {
  return (
    <section className="relative">
      <SearchBar value={search} placeholder={copy.searchPlaceholder} onChange={onSearch} />

      <button
        type="button"
        aria-label="お気に入りのみ表示"
        onClick={onFavoriteFilterToggle}
        className="mb-[21px] min-h-[44px] rounded-full border border-[var(--color-line)] px-[13px] text-sm text-[var(--color-sumi)] transition-all duration-300 hover:border-[var(--color-gold)]"
      >
        {favoriteOnly ? copy.favoriteOnly : copy.allNotes}
      </button>

      {notes.length === 0 ? (
        <EmptyState onCreate={onCreate} />
      ) : (
        <div className="grid gap-[13px] pb-[89px]">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onOpen={onOpen} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      )}

      <button
        type="button"
        aria-label={copy.newNote}
        onClick={onCreate}
        className="fixed bottom-[21px] left-1/2 z-20 h-[55px] w-[55px] -translate-x-1/2 rounded-full border border-[var(--color-sumi)] bg-[var(--color-sumi)] text-xl text-[var(--color-paper)] shadow-[0_8px_21px_var(--color-shadow)] transition-transform duration-300 hover:scale-105 md:left-auto md:right-[calc(50%-360px+21px)] md:translate-x-0"
      >
        ＋
      </button>
    </section>
  );
}
