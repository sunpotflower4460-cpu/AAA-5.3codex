import { copy } from '../lib/i18n';

type EmptyStateProps = {
  onCreate: () => void;
  variant?: 'default' | 'search';
};

export function EmptyState({ onCreate, variant = 'default' }: EmptyStateProps) {
  const title = variant === 'search' ? copy.emptySearchTitle : copy.emptyTitle;
  const subtitle = variant === 'search' ? copy.emptySearchSubtitle : copy.emptySubtitle;

  return (
    <section className="relative rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] px-[21px] py-[34px] text-center shadow-[0_8px_21px_var(--color-shadow)]">
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[89px] w-[89px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-line)] opacity-40" />
      <h2 className="relative font-serif-title text-xl text-[var(--color-sumi)]">{title}</h2>
      <p className="relative mt-[8px] text-sm text-[var(--color-ink-muted)]">{subtitle}</p>
      <button
        type="button"
        aria-label={copy.openEmpty}
        onClick={onCreate}
        className="relative mt-[21px] min-h-[44px] rounded-full border border-[var(--color-sumi)] px-[21px] text-sm text-[var(--color-sumi)] transition-all duration-300 hover:bg-[var(--color-sumi)] hover:text-[var(--color-paper)]"
      >
        {copy.openEmpty}
      </button>
    </section>
  );
}
