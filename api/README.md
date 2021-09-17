# Rauls メモ

## Model

### モデルクラスの作成

```bash
dc exec api rails generate model Relationship follower:references followed:references
dc exec api bin/rails db:migrate
```

`generate model`は、Model と migration ファイルが作成される。
view と controler は作成されない。
省略形として`rails g`でも可。

参考：[Rails4 外部キーをテーブルに設定するための、3 通りのマイグレーションの書き方。](https://tkymtk.hatenablog.com/entry/rails-4-three-way-to-write-migration-2014-1)

### カラム追加

```bash
rails generate migration クラス名 カラム名:データ型( カラム名:データ型)`
```

```bash
dc exec api rails generate migration AddProfilesToUsers profile:string
dc exec api bin/rails db:migrate
```

### DB 確認

```bash
dc exec api rails dbconsole
\d tweets
```

### FIXTURE 追加

```bash
dc exec api bin/rails db:fixtures:load FIXTURES=tweets
```

### カラム削除

```bash
dc exec api rails generate migration RemoveStringFromTweets string:string
```

## ルーティング

### 確認

```bash
dc exec api bundle exec rake routes
```

### めも

- namespace：ルーティングもディレクトリも変更したい
- scope：ルーティングは変更するが、ディレクトリは変更したくない
