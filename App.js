import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles.json';

export default function App() {
  // map関数でarticleの配列を展開
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imageUrl={article.urlToImage}
        text={article.title}
        author={article.author}
        // keyを忘れずに
        key={index}
      />
    );
  });

  return (
    <View style={styles.container}>
      {/* ↓mapで展開したarticlesの内容を表示 */}
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            text={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
