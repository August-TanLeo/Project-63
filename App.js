import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{felx:1}}>
      <HomeScreen/>
      </View>
    )
  }
}
