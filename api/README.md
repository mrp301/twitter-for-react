# Rauls メモ

FIXTURE 追加

```bash
dc exec api bin/rails db:fixtures:load FIXTURES=tweets
```

カラム削除

```bash
dc exec api rails generate migration RemoveStringFromTweets string:string
```
