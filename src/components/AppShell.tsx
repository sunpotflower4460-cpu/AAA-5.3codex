import type { ReactNode } from 'react';
import { copy } from '../lib/i18n';
import { ZanshinMark } from './ZanshinMark';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="mb-[34px] flex flex-col gap-[13px]">
        <div className="flex items-center gap-[13px]">
          <ZanshinMark />
          <div>
            <h1 className="font-serif-title text-[34px] leading-none text-[var(--color-sumi)]">{copy.appName}</h1>
            <p className="text-sm text-[var(--color-indigo)]">{copy.appSubtitle}</p>
          </div>
        </div>
        <p className="text-sm text-[var(--color-ink-muted)]">
          {copy.tagline}
          <span className="mt-1 block text-xs">{copy.taglineEn}</span>
        </p>
      </header>
      {children}
    </div>
  );
}
