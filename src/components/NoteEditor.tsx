import { copy } from '../lib/i18n';
import type { Note } from '../types/note';

type NoteEditorProps = {
  note: Note;
  showSaved: boolean;
  onBack: () => void;
  onChange: (noteId: string, updates: Pick<Note, 'title' | 'body'>) => void;
  onToggleFavorite: (noteId: string) => void;
  onDelete: (noteId: string) => void;
};

export function NoteEditor({ note, showSaved, onBack, onChange, onToggleFavorite, onDelete }: NoteEditorProps) {
  return (
    <section className="pb-[34px]">
      <div className="mb-[21px] flex items-center justify-between gap-[8px]">
        <button
          type="button"
          aria-label={copy.back}
          onClick={onBack}
          className="min-h-[44px] rounded-full border border-[var(--color-line)] bg-[var(--color-paper-soft)] px-[13px] text-sm text-[var(--color-sumi)] transition-all duration-300 hover:border-[var(--color-gold)] active:scale-[0.99]"
        >
          ← {copy.back}
        </button>
        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            aria-label={copy.favorite}
            onClick={() => onToggleFavorite(note.id)}
            className="min-h-[44px] rounded-full border border-[var(--color-line)] bg-[var(--color-paper-soft)] px-[13px] text-sm text-[var(--color-gold)] transition-all duration-300 hover:border-[var(--color-gold)] active:scale-[0.99]"
          >
            {note.isFavorite ? '★' : '☆'}
          </button>
          <button
            type="button"
            aria-label={copy.delete}
            onClick={() => onDelete(note.id)}
            className="min-h-[44px] rounded-full border border-[var(--color-vermilion)] bg-[var(--color-paper-soft)] px-[13px] text-sm text-[var(--color-vermilion)] transition-all duration-300 hover:bg-[var(--color-washi)] active:scale-[0.99]"
          >
            {copy.delete}
          </button>
        </div>
      </div>

      <label className="sr-only" htmlFor="note-title">
        タイトル
      </label>
      <input
        id="note-title"
        aria-label="タイトル"
        value={note.title}
        onChange={(event) => onChange(note.id, { title: event.target.value, body: note.body })}
        placeholder={copy.titlePlaceholder}
        className="mb-[21px] w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-soft)] px-[21px] py-[13px] font-serif-title text-xl leading-[1.5] text-[var(--color-sumi)] outline-none transition-all duration-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
      />

      <label className="sr-only" htmlFor="note-body">
        本文
      </label>
      <textarea
        id="note-body"
        aria-label="本文"
        value={note.body}
        onChange={(event) => onChange(note.id, { title: note.title, body: event.target.value })}
        placeholder={copy.bodyPlaceholder}
        className="min-h-[56svh] w-full resize-none rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper-soft)] px-[21px] py-[21px] text-base leading-[1.8] text-[var(--color-sumi)] outline-none transition-all duration-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
      />

      <p
        className={`mt-[13px] text-xs tracking-[0.03em] text-[var(--color-indigo)] transition-all duration-300 ${
          showSaved ? 'translate-y-0 opacity-100' : 'translate-y-[2px] opacity-35'
        }`}
      >
        {copy.saved}
        <span className="ml-[8px]">{copy.savedEn}</span>
      </p>
    </section>
  );
}
