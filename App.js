import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
