---
title: Gitbook でドキュメントを作成する
slug: gitbook_intro
tag: 
 - gitbook
created_at: 2018-09-12
is_open: true
summary: | 
  Gitbook を利用して、Markdown ベースで文書管理を行う方法についてまとめました。
---

## Gitbook の使い方

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
