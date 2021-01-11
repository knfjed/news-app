# news-app

ニュースを API を通じて取得し、閲覧できるアプリ。

＜使用している技術＞

- React Native
- EXPO
- API

< 使用している API >
News API
url: 'https://newsapi.org/'

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

url: 'https://reactnative.dev/docs/flatlist#docsNav'

スクロールさせたいエリア（画面全体）を<FlatList>で囲う

## SafeAreaView

### iPhone12 などの大画面の上下ベゼル部分を回避

url: 'https://reactnative.dev/docs/safeareaview#docsNav'

## APIkey などコミットしたくない情報の保存方法

url: 'https://www.it-swarm-ja.tech/ja/reactjs/createreactapp%E3%81%A7api%E3%82%AD%E3%83%BC%E3%82%92%E9%9D%9E%E8%A1%A8%E7%A4%BA%E3%81%AB%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF%E3%81%A9%E3%81%86%E3%81%99%E3%82%8C%E3%81%B0%E3%82%88%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F/835897536/'

## React Navigation

### 画面遷移

url: 'https://reactnavigation.org/docs/getting-started'

npm でインストール後、import して利用
参考：'https://reactnavigation.org/docs/hello-react-navigation'

## TouchableOpacity

### タッチ操作を感知

url: 'https://reactnative.dev/docs/touchableopacity'

1- 子コンポーネント（今回は Listitem.js）内にて<br/>
<TouchableOpacity>で囲み、オプション onPress を指定<br/>
2- 親コンポーネントに onPress を props として渡して利用する

## WebView

### Web コンテンツをレンダリングする

url: 'https://docs.expo.io/versions/latest/sdk/webview/'

npm でインストール後、import して利用

## 画面間でのパラメータの渡し方

url: 'https://reactnavigation.org/docs/params/'

1- 親　 navigation.navigate の第二引数に渡したいパラメータのオブジェクトを指定
（itemId,otherParams）
2- 子（遷移先）　 props として受け取る
