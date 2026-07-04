# 侘び寂び禅 / Wabi Sabi Zen ホームページ

金沢・築80年の町家を活かした古民家カフェ＆シーシャバーの公式サイト。
コンセプトは **1970s Japan × Timeless Beauty**。日本語＋英語対応。
Next.js（App Router）製。ローカルSEO対応（構造化データ・FAQ・sitemap・狙いキーワード内包）。

Notionの内容（住所・電話・メール・営業時間・メニュー・FAQ 等）は**反映済み**です。
公開後に微調整したい箇所だけ、下記を書き換えてください。

---

## ① 編集はこの1ファイルだけ

**`lib/site.js`** を開いて書き換えれば、日本語・英語ともサイト全体に反映されます。

とくに確認・調整したい項目：

| 項目 | 変数 | 補足 |
|---|---|---|
| 緯度・経度 | `geo` | ★概算値。Googleマップでピンを右クリック→正確な数値に |
| OPEN告知バッジ | `openBadge` | 例 `"2026.5 OPEN"`。空 `""` なら非表示（今は非表示） |
| メニュー・価格 | `menu` | 季節で変わる分はここを更新 |
| 営業時間 | `hours` / `openingHoursSpec` | 表示用と検索用の両方 |
| ご利用案内 | `info` | 支払い・Wi-Fi・喫煙・年齢制限など |
| SNS | `sns` | Instagram設定済み。他は空で非表示 |
| 公開URL | `url` | Vercelで決まったURLに |

写真は `public/` に置いて、各コンポーネントで `/画像名.jpg` として使えます。

> 英語文（`aboutEn` `heroEn` `menu内 nameEn` `faq内 qEn/aEn` など）も
> `lib/site.js` にまとまっています。外国人向けの表現を調整したいときはここを。

---

## ② GitHubに入れる（初めてでもOK・Web版が簡単）

1. GitHubにログイン →「**New repository**」
2. Repository name に `wabisabizen` と入力 → **Create repository**
3. 次の画面で「**uploading an existing file**」をクリック
4. このフォルダの中身を **すべてドラッグ＆ドロップ**（`node_modules`・`.next` は入れない）
5. 「**Commit changes**」を押す

> コマンド派の場合：
> ```bash
> git init && git add . && git commit -m "first commit"
> git branch -M main
> git remote add origin https://github.com/ユーザー名/wabisabizen.git
> git push -u origin main
> ```

---

## ③ Vercelで公開

1. [vercel.com](https://vercel.com) に **GitHubアカウントでログイン**
2. 「**Add New… → Project**」→ `wabisabizen` を **Import**
3. 設定はそのまま（**Next.js** を自動検出）→ **Deploy**
4. 1〜2分で `https://wabisabizen.vercel.app` のようなURLが発行され公開完了
5. 発行URLを `lib/site.js` の `url` にも反映

以降、GitHubを更新すると **自動で再公開** されます。
独自ドメインは Vercel → **Settings → Domains** から。

---

## ④ 公開後のSEO（集客のためにやること）

1. **Googleビジネスプロフィール** を登録・充実（地図検索の集客はこれが最重要）
2. **Google Search Console** に登録し `sitemap.xml` を送信
3. **Instagram（@wabi.sabizen）** を運用し、プロフィールにサイトURLを設置
4. 「金沢 古民家カフェ インスタ映え」「ひがし茶屋街 古民家カフェ スイーツ」等の
   ロングテール語は、投稿やブログでも継続発信すると効果的

> 狙いキーワード（メイン＋ロングテール＋町家/金箔/昭和レトロ＋英語）は
> メタ情報と本文の両方に組み込み済み。FAQは構造化データ化してあり、
> Google検索でQ&Aが表示されやすくなっています。

---

## ローカルで見た目を確認（任意）

Node.js を入れて：
```bash
npm install
npm run dev
```
→ ブラウザで `http://localhost:3000`

---

## 構成メモ

```
lib/site.js         ← 店舗情報（日本語＋英語。ここを編集）
app/layout.js       ← メタ情報・キーワード・構造化データ・FAQ
app/page.js         ← ページ組み立て
app/globals.css     ← デザイン（和モダン）
components/          ← 各セクション（Hero / About / Story / 昼 / 夜 / Menu / Access / FAQ …）
```

