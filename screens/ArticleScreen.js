import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ url: 'https://expo.io' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'pink',
  },
});
