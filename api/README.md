# Rauls メモ

## Model

### モデルクラスの作成

```bash
dc exec api rails generate model follow user_id:bigint follow_user_id:bigint
dc exec api bin/rails db:migrate
```

### カラム追加

`rails generate migration クラス名 カラム名:データ型( カラム名:データ型)`

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
