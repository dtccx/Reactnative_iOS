import React, { Component } from 'react';
import { AppRegistry, View, Button, Alert, ButtonGroup, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const colorarr = ["black", "blue", "cyan", "green", "magenta", "red", "yellow"];
const idx = 0;
const conum = 7;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: idx
    }
  }

  // colorchange(){
  //   this.setState({
  //     color: 'green'
  //   });
  // }
  colorchange = () =>
  {
    this.setState({ index: ++idx % conum});
  }


  render() {
    return (
      // <View style={{flex :1, justifyContent: 'center', margin: 15 }}>
      //
      // <View style={{marginTop: 15}}>
      //
      //   <Button onPress={ this.colorchange } title='a' backgroundColor='green' color={colorarr[this.state.index]} />
      //
      // </View>
      //
      // <View style={{marginTop: 15}}>
      //
      //   <Button onPress={ this.HelloFunction } title="BUTTON 2" color="#E91E63" />
      //
      // </View>
      //
      // <View style={{marginTop: 15}}>
      //
      //   <Button onPress={ this.HelloFunction } title="BUTTON 3" color="#9C27B0" />
      //
      // </View>
      //
      // </View>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: colorarr[this.state.index] }} >
          <Button onPress={ this.colorchange } title='a' backgroundColor='green' color={colorarr[this.state.index]} />
        </View>

        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    insiderView:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },

    color:
    {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgba(0,0,0,0.7)'
    },

    button:
    {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 50,
        padding: 13,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.5)'
    }
});
