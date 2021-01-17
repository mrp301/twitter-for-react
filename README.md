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