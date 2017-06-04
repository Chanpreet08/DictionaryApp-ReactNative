/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Dictionary extends Component {
  constructor(props)
  {
    super(props);
    this.state = {input:'',output:''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Type Something in English
        </Text>
        <TextInput value= {this.state.input} onChangeText={(text)=>{this.setState({input:text})}} />
        <Text>
          Its German Equivalent is:
         </Text>
        <Text>
          {this.state.output}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    padding: 10
  },
  welcome: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
