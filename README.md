# news-app

ニュースを API を通じて取得し、閲覧できるアプリ。

＜使用している技術＞

- React Native
- EXPO
- API

## expo-cli

React Native の開発ツールの一つ。

### メリット

- 最初のリリースはストアを通して行う必要があるが、<br/>
  その後のアップデートは審査を通らずに行える為、<br/>
  ユーザーにスムーズに提供できる。
  （ただし、ストアに公開されるのはあくまでも初回のものの為、<br/>
  大幅なアップデートはやはりストアを通す必要がある）

- 環境構築が簡単に行える

### デメリット

- ネイティブ機能の組み込みに困難なものがある
  例えば、分析系やバックグラウンドでの音楽再生、bluetooth など。
  expo が提供しているものであれば使用できる。（位置情報やカメラの使用など）

## FlatList

### 画面をスクロールさせる

url[https://reactnative.dev/docs/flatlist#docsNav]

スクロールさせたいエリア（画面全体）を<FlatList>で囲う

## SafeAreaView

### iPhone12 などの大画面の上下ベゼル部分を回避

url[https://reactnative.dev/docs/safeareaview#docsNav]
