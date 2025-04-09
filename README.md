# maretol-xyz-root

`maretol.xyz` のアドレスにアクセスしたら `www.maretol.xyz` のアドレスに転送する処理

CNAMEだとメールとかの設定で問題が起きるのでHTTP領域で転送したかったので作った。とはいえリクエストとかはそんなにないのでほぼ放置予定。気が向けばDependabotぐらいは動かすかも

一応Honoを使っている。将来他の処理もHonoで書き直したい

## dev

```
npm install
npm run dev
```

## deploy

```
npm run deploy
```

小さな処理なのでデプロイは手動
