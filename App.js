import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  SafeAreaSafeAreaView,
} from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
        // idは持ってないのでindexで代用
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
