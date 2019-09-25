import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import youtube from './Api/youtube';

export default class App extends Component {

  onSubmitEditing = async term => {
    const response= await youtube.get('/Search', {
      params: {
        q: term
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.response)
    });
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>WELCOME TO OUR VIDEO PLAYER</Text>
      
      <Search
        onSubmitEditing = {this.onSubmitEditing}
       />
    </View>
    )
  }
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
