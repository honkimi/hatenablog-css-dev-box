# はてなブログのカスタマイズ CSS 開発環境
はてなブログのデザイン編集のための雛形です。

# インストール
それぞれの入れ方は Google で。

- node.js
- npm

# 最新に反映(任意)
https://github.com/hatena/Hatena-Blog-Themes/tree/master/boilerplate

ここの`less`ディレクトリと `boilerplate.less` をここにコピペして更新

# セットアップ

- Gruntfile.js の TODO: を編集。Dropboxへのパスを指定する

```
npm install
grunt
```

- Dropbox へ出力された boilerplate.css のパブリックURLをコピー
- はてなブログの［設定］→［詳細設定］→［head に要素を追加］

```
<link rel="stylesheet" href="https://dl.dropboxusercontent.com/u/******/boilerplate.css">
```

# 本番ブログに反映

```
grunt less:production
```

dist に出力された boilerplate.min.css をはてなブログのCSS設定へコピペ

