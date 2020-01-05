## セットアップ
```
make install
```

## ローカルサーバ起動
```
make up
```

`localhost:8888`にアクセス

## ビルド
```
make build
```

## デプロイ
1. appコンテナ起動
```shell script
docker-compose run --rm app sh
```

2. firebaseにログイン
```shell script
firebase login --no-localhost
```

3. ビルド
```shell script
npm run build
```

4. デプロイ
```shell script
npm run deploy
```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
