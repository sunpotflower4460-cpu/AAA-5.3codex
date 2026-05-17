import { formatUpdatedAt } from '../lib/date';
import { copy } from '../lib/i18n';
import type { Note } from '../types/note';

type NoteCardProps = {
  note: Note;
  onOpen: (noteId: string) => void;
  onToggleFavorite: (noteId: string) => void;
};

export function NoteCard({ note, onOpen, onToggleFavorite }: NoteCardProps) {
  const title = note.title.trim() || copy.untitled;

  return (
    <article className="group relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-[21px] shadow-[0_8px_21px_var(--color-shadow)] transition-all duration-300 hover:-translate-y-[1px]">
      <span className="absolute bottom-[13px] left-[8px] top-[13px] w-[2px] rounded-full bg-[var(--color-line)]" aria-hidden="true" />
      <button
        aria-label="メモを開く"
        type="button"
        onClick={() => onOpen(note.id)}
        className="w-full text-left"
      >
        <h2 className="pr-[34px] font-serif-title text-lg text-[var(--color-sumi)]">{title}</h2>
        <p className="mt-[8px] line-clamp-3 min-h-[55px] text-sm leading-[1.618] text-[var(--color-ink-muted)]">
          {note.body || '…'}
        </p>
        <p className="mt-[13px] text-xs text-[var(--color-indigo)]">{formatUpdatedAt(note.updatedAt, note.locale ?? 'ja')}</p>
      </button>
      <button
        aria-label="お気に入り切り替え"
        type="button"
        onClick={() => onToggleFavorite(note.id)}
        className="absolute right-[13px] top-[13px] h-[34px] w-[34px] rounded-full border border-[var(--color-line)] text-sm text-[var(--color-gold)] transition-colors duration-300 hover:bg-[var(--color-washi)]"
      >
        {note.isFavorite ? '★' : '☆'}
      </button>
    </article>
  );
}
