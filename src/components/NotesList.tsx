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
  const hasSearchQuery = search.trim().length > 0;

  return (
    <section className="relative">
      <SearchBar value={search} placeholder={copy.searchPlaceholder} onChange={onSearch} />

      <div className="mb-[21px] flex items-center justify-between gap-[13px]">
        <button
          type="button"
          aria-label="お気に入りのみ表示"
          onClick={onFavoriteFilterToggle}
          className="min-h-[44px] rounded-full border border-[var(--color-line)] bg-[var(--color-paper-soft)] px-[13px] text-sm text-[var(--color-sumi)] transition-all duration-300 hover:border-[var(--color-gold)] active:scale-[0.99]"
        >
          {favoriteOnly ? copy.favoriteOnly : copy.allNotes}
        </button>
        <p className="text-xs tracking-[0.03em] text-[var(--color-ink-muted)]">{notes.length}件</p>
      </div>

      {notes.length === 0 ? (
        <EmptyState onCreate={onCreate} variant={hasSearchQuery ? 'search' : 'default'} />
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
        className="breath-motion fixed bottom-[21px] left-1/2 z-20 h-[55px] w-[55px] -translate-x-1/2 rounded-full border border-[color-mix(in_srgb,var(--color-sumi),white_8%)] bg-[var(--color-sumi)] text-xl text-[var(--color-paper)] shadow-[0_8px_21px_var(--color-shadow)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] md:left-auto md:right-[calc(50%-360px+21px)] md:translate-x-0"
      >
        ＋
      </button>
    </section>
  );
}
