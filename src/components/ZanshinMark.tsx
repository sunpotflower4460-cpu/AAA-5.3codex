export function ZanshinMark() {
  return (
    <div className="relative h-[34px] w-[34px]" aria-hidden="true">
      <span className="absolute inset-0 rounded-full border border-[var(--color-line)]" />
      <span className="absolute left-1/2 top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-line)]" />
    </div>
  );
}
