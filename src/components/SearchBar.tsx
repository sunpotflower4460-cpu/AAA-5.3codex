type SearchBarProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
  return (
    <label className="mb-[21px] block">
      <span className="sr-only">検索 / Search</span>
      <input
        aria-label="検索"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] px-[21px] py-[13px] text-[15px] outline-none transition-all duration-300 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
      />
    </label>
  );
}
