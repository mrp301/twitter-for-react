# Rauls メモ

### FIXTURE 追加

```bash
dc exec api bin/rails db:fixtures:load FIXTURES=tweets
```

### カラム削除

```bash
dc exec api rails generate migration RemoveStringFromTweets string:string
```

### ルーティング確認

```bash
dc exec api bundle exec rake routes
```

### ルーティングめも

- namespace：ルーティングもディレクトリも変更したい
- scope：ルーティングは変更するが、ディレクトリは変更したくない
