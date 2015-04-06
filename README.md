nodeとnpmをインストールしておく(Chefなんかで)

expressをグローバルインストールする  
`$ sudo npm install -g express`  

express-generatorをグローバルインストールする  
(これでexpressコマンドが使えるようになる)  
`$ sudo npm install -g express-generator`  

```
$ express --version
4.12.1
```

プロジェクトを配置するディレクトリを作成  
`$ sudo mkdir -p /var/www/nodejssample`  
`$ cd nodejssample`  

expressでsampleプロジェクトを作成する  
`$ express sample`  

sampleディレクトリが作成され、必要なモジュールを含んだpackgae.jsonが作成されているのでライブラリをインストール  
`$ cd sample`  
`$ sudo npm install`  

サーバ起動  
`$ npm start`  
※package.jsonの
```
 "scripts": {
    "start": "node ./bin/www"
  },
```  
が呼ばれている

ブラウザでアクセス  
http://[ホスト名]:3000/


サーバーjsを更新したときに、再起動するようにnode-devをインストール  
`$ sudo npm install -g  node-dev`  

※package.jsonのstartをnode-devに変更  
```
 "scripts": {
    "start": "node-dev ./bin/www"
  },
```  

サーバ起動  
`$ npm start`  