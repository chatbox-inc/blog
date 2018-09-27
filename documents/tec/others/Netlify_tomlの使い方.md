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

```toml
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


