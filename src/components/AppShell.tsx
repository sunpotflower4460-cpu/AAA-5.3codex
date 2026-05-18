import type { ReactNode } from 'react';
import { copy } from '../lib/i18n';
import { ZanshinMark } from './ZanshinMark';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="soft-enso mb-[55px] flex flex-col gap-[13px]">
        <div className="flex items-end gap-[13px]">
          <ZanshinMark />
          <div>
            <h1 className="font-serif-title text-[34px] leading-none tracking-[0.02em] text-[var(--color-sumi)]">{copy.appName}</h1>
            <p className="mt-[4px] text-xs tracking-[0.12em] text-[var(--color-indigo)]">{copy.appSubtitle}</p>
          </div>
        </div>
        <p className="max-w-[34ch] text-sm leading-relaxed text-[var(--color-ink-muted)]">
          {copy.tagline}
          <span className="mt-[5px] block text-xs tracking-[0.03em] text-[color-mix(in_srgb,var(--color-ink-muted),var(--color-indigo)_25%)]">
            {copy.taglineEn}
          </span>
        </p>
      </header>
      {children}
    </div>
  );
}
