---
title: Netlify.toml で Netlify の Deploy 設定を管理する
slug: netlify_toml
tag: 
 - netlify
created_at: 2018-09-27
is_open: true
summary: | 
  Netlifuy.toml を利用して Netlify のデプロイ設定をコードベースで管理する方法を紹介します。
---

## Netlify の デプロイ設定

Netlify は静的サイト配信向けの Webサービスとして広く利用されているもので、
Github 等のリポジトリと連携して、リポジトリの更新に合わせて自動的にサイトを更新することができる便利なサービスです。

Netilfy では Web上の画面を通じて、
デプロイ時に実行するコマンドや配信フォルダ、環境変数の設定などを行うことができるのですが、
これらを全てWeb上のGUIだけで操作するのは、場合によっては不便なケースもあります。

こうした情報をコードベースで管理するには、
設定ファイルの`netlify.toml` を利用するのが便利です。

### Netlify.tomlの利用

リポジトリのルートに `netlify.toml` という名前でファイルを作成すると、
Netlify は自動的にデプロイ時にファイルを検出し、設定ファイルとして取り込みます。

Netlify.toml の内容は以下のような形になります。

```
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  FRONT_API_URL="https://example.com/"
```

`build`はビルド時に実行するコマンドや、配信フォルダを指定するディレクトリです。

また、`build.environment` ディレクトリに、
ビルド環境で利用する環境変数等を指定することができます。

`netlify.toml`ファイルが存在するリポジトリをNetlify上で配信する場合、
GUI 上での設定はマージされるのではなく完全に無視されます。

auto publishing の設定等、デプロイ周りの完全は、
`netlify.toml`上のものが完全に正となるため、注意してください。

## Deploy Context の利用

Netlify の特徴の一つとして、一つのGitリポジトリから
ブランチ等に応じた様々な環境を生成することができる、という機能があります。

ブランチやPRベースで生成される各環境に応じて、
異なる設定を行いたい場合にも、`netlify.toml` が利用されます。




Gitbook は node 製の Markdown 文書管理ツールです。

複数ファイルの Markdown で記述した文書を、Webサイトにしたり、
PDFや epub 形式に変換したりすることができます。

Gitbook を利用するには npm 経由でライブラリをグローバルにインストールします。

```bash
$ npm i -g gitbook
```

`gitbook` コマンドが利用可能になったら `gitbook init` で初期ファイル構成を作成します。


```bash
$ gitbook init
info: create README.md 
info: create SUMMARY.md 
info: initialization is finished 
```

上記の様にメッセージが表示され、`README.md` `SUMMARY.md` が作成されます。

README.md に記述した内容が、文書のトップとして扱われます。

また `SUMMARY.md` に目次を追加することで、複数ファイルのリンク付も可能になっています。


文書の状態をブラウザでプレビューする場合、`gitbook serve` を実行します。

```bash
$ gitbook serve
```

コマンドを実行すると、サーバが展開され `http://localhost:4000` で文書の状態がプレビューされます。

また、生成された文書のHTMLは、`gitbook build`コマンドで生成することができます。

```bash
$ gitbook buuild
```

コマンドを実行すると `_book` フォルダが作成され、中に文書をHTMLサイト化したファイル群が展開されます。

## Gitbook の設定

Gitbook の設定を行う場合、プロジェクトルートに `book.json` を作成し、設定ファイルとします。

```json
{
    "language": "ja"
}
```

上記のように 言語設定を `ja` 設定にしておくと(デフォルトは `en` )、HTML ビルド時の言語設定も日本語に調整されます。

利用可能な設定項目の全容は、下記公式ドキュメントに掲載されています。

https://toolchain.gitbook.com/config.html

## Epubの作成

`Calibre` をインストールすることで、 Epub を生成することも可能です。

コマンドは、`gitbook epub` を利用します。

```bash
$ gitbook epub
```

Epub 形式で生成したファイルは、電子書籍ファイルとして配布が可能となっており、
PDF同様、ページ内リンクや目次の利用が可能になっています。

`cover.jpg` を配置して表紙のカスタマイズ等も行えるようで、詳細なセットアップ等は公式ドキュメントを参照してください。 

https://toolchain.gitbook.com/ebook.html

## TIPS 

### Summary から Introduction の文字を削除する。

summary.md に対し、任意のタイトルで README.md へのリンクを貼ればOKです。

```markdown
* [任意のタイトル](readme.md)
```
