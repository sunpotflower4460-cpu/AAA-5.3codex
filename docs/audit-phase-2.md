# 残心 / Zanshin Phase 2 Audit
## 監査日
2026-05-17
## 監査対象
- README.md
- docs/concept.md
- docs/design-system.md
- docs/mvp-spec.md
- docs/development-phases.md
- .github/copilot-instructions.md
---
## 1. コンセプト監査
判定: OK
確認内容:
- アプリ名「残心 / Zanshin」と一言コンセプトがREADMEに明記されている
- 「残心」「間」「余白」が concept.md でUI/UX中核として整理されている
- 多機能化より静かな書く体験を優先する方針が全体で一貫している
修正した内容:
- READMEの海外向け表現を、静けさ中心の文言へ整理
- READMEにiOS前提の体験方針を追記
---
## 2. デザイン監査
判定: OK
確認内容:
- 和モチーフは意味ベースで定義され、装飾過多を避ける方針が明記されている
- 黄金比スケール、カラーパレット、行間・余白・FABサイズが定義されている
- 現代和・静けさ・海外にも伝わる美意識の方向性が維持されている
修正した内容:
- docs/design-system.md に iPhone UI実装ガイドを追加
- タップサイズ、キーボード時の可用性、カード間隔の具体値方針を明文化
---
## 3. MVP範囲監査
判定: OK
確認内容:
- 必須機能（一覧/作成/編集/削除/自動保存/検索/お気に入り/ローカル保存）が揃っている
- 非MVP項目（ログイン/同期/AI/課金等）が明確に除外されている
- localStorage開始・IndexedDB移行余地・Capacitor移行余地が明記されている
修正した内容:
- docs/mvp-spec.md に iOS前提（タップサイズ・キーボード対応・PWA/Capacitor前提）を追記
- iPhone-firstの実装判断基準を明確化
---
## 4. 開発フェーズ監査
判定: OK
確認内容:
- Phase 1=設計、Phase 2=監査、Phase 3=MVP実装の流れが明記されている
- Phase 3完了前のCloudflareデプロイ禁止ルールが明記されている
- 将来拡張候補がMVPと分離されている
修正した内容:
- docs/development-phases.md のPhaseステータスを実態に合わせて更新
- Phase 2に「監査対象限定・実装開始禁止」を追記
---
## 5. Cloud Agent指示監査
判定: OK
確認内容:
- プロジェクト目的（静けさ・余白・iPhone-first）が明確
- Phase 1/2/3の作業範囲とデプロイルールが明確
- 技術方針（React+TS+Vite+Tailwind、storage分離）が簡潔
修正した内容:
- .github/copilot-instructions.md にMVP/Phase 1-3で追加禁止機能を明記
- login/sync/AI/payment の勝手追加を禁止する文面を補強
---
## 6. Phase 3 実装前の最終方針
Phase 3では以下を守ること。
- Vite + React + TypeScript + TailwindでMVPを作る
- localStorage保存から開始する
- メモ一覧、作成、編集、削除、自動保存、検索、お気に入りを実装する
- iPhone-firstで設計する
- 余白と行間を大切にする
- 機能を増やしすぎない
- Cloudflare PagesへのデプロイはMVP完成後のみ行う
---
## 7. MVPでまだ作らないもの
- ログイン
- クラウド同期
- AI機能
- 課金
- Markdown完全対応
- 複雑なタグ管理
- 共同編集
- App Store申請
---
## 8. 総合判定
```txt
Phase 3に進んでよい

理由:
主要設計ファイルの整合性を確認し、海外向け表現・iOS前提・Agent向け禁止事項の不足を補完した。
MVP範囲は拡大せず、Cloudflareデプロイ禁止と実装開始タイミングのルールも維持されている。
```
