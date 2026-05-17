# 残心 / Zanshin

> 書いたあとにも、心がそこに残るメモ帳。  
> A note-taking app where the heart lingers, even after the writing ends.

---

## アプリ概要

「残心」は、和の美意識・間・余白・静けさを大切にした、シンプルなiOS向けメモアプリです。

Open → Write → Save quietly → Return → Read again の最小体験に集中します。

---

## 技術スタック

- Vite
- React + TypeScript
- Tailwind CSS
- localStorage（MVP）

---

## MVP機能

- メモ一覧
- メモ作成
- メモ編集
- メモ削除（確認ダイアログ）
- 自動保存
- 検索（タイトル・本文）
- お気に入り
- localStorage保存
- iPhone向けレスポンシブUI
- 日本語/英語を意識した文言

---

## セットアップ

```bash
npm install
```

## 開発起動

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## Lint

```bash
npm run lint
```

---

## Cloudflare Pages方針

Phase 3の途中ではデプロイしません。MVP完成後にのみ、必要ならデプロイ設定を行います。

Cloudflare Pages想定:

- Build command: `npm run build`
- Build output directory: `dist`

---

## 開発フェーズ

| フェーズ | 内容 | Cloudflareデプロイ |
|----------|------|-------------------|
| Phase 1 | 設計整理 | しない |
| Phase 2 | 監査フェーズ | しない |
| Phase 3 | MVP実装 | MVP完成後のみ |

詳細は [docs/development-phases.md](docs/development-phases.md) を参照。

---

## ドキュメント

| ファイル | 内容 |
|----------|------|
| [docs/concept.md](docs/concept.md) | 「残心」の思想と世界観 |
| [docs/design-system.md](docs/design-system.md) | UI/UXとデザインシステム |
| [docs/mvp-spec.md](docs/mvp-spec.md) | MVP仕様 |
| [docs/development-phases.md](docs/development-phases.md) | 開発フェーズ |
| [docs/audit-phase-2.md](docs/audit-phase-2.md) | Phase 2監査結果 |
