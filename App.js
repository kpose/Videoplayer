import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>WELCOME TO OUR VIDEO PLAYER</Text>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    paddingLeft: 10,
    paddingRight:10
  },
});
