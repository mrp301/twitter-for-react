# twitter for react

## 実行環境
- Docer
- React
- TypeScript
- RubyOnRails

## setup
```
docker-compose build --no-cache
docker-compose run --rm api rake db:create 
docker-compose run --rm api rake db:migrate
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