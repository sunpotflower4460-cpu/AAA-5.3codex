type SearchBarProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
  return (
    <label className="mb-[21px] block">
      <span className="sr-only">検索 / Search</span>
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2 text-sm text-[var(--color-ink-muted)]"
        >
          ⌕
        </span>
        <input
          aria-label="検索"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-h-[44px] w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-soft)] px-[21px] py-[13px] pl-[39px] text-[15px] text-[var(--color-sumi)] outline-none transition-all duration-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
        />
      </div>
    </label>
  );
}
