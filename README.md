# twitter for react

## 勉強会資料

[TypeScriptを使うことで得られる Developer Experience](https://docs.google.com/presentation/d/1c3_KZ6zwdN-PcAZmTCmuJyr9PrxoFhcakvelYBkv2lk/edit?usp=sharing)

## 実行環境

- Docer
- React
- TypeScript
- RubyOnRails

## setup

`docker-compose`のエイリアス登録

```
alias dc='docker-compose'
source ~/.bashrc
```

```
docker-compose build --no-cache
docker-compose run --rm api rake db:create
docker-compose run --rm api rake db:migrate

// frontディレクトリに移動して
npm install
```

- api：http://localhost:3000/
- front：http://localhost:8000/

## 参考記事

### setup

- https://qiita.com/takano-h/items/84ae73b41eef83602bd9
- https://qiita.com/dl10yr/items/b76969da1c2c33595a4a

### ログイン

- https://kenny27.hatenablog.com/entry/2019/01/29/014725
- https://qiita.com/mtoyopet/items/076b623ac72f4f83c5f6
- https://masahiro.me/2017/06/devise-token-auth-2/

## 残タスク

- ER 図作成
- user に情報追加
  - プロフィール
  - アイコン
  - カバー画像
- ツイート機能
- プロフィール変更機能
- ログアウト
- ページネーション
- モーダル UI
- タブ切り替え
- テストコード
- storybook
- firebase?
