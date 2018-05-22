import React, { Component } from 'react';
import { AppRegistry, View, Button, Alert, ButtonGroup, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';

const colorarr = ["black", "blue", "cyan", "green", "magenta", "red", "yellow"];
const conum = 7;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index0: 0,
      index1: 1,
      index2: 2,
      index3: 3,
      index4: 4,
      index5: 5,
      index6: 6,
    }
  }

  // colorchange(){
  //   this.setState({
  //     color: 'green'
  //   });
  // }
  _colorchange(idx){
    this.setState({ [idx]: ++this.state[idx] % conum});
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





      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   flexWrap: 'wrap',
      // }}>
      //   <View style={{width: 50, height: 50, backgroundColor: colorarr[this.state.index] }} >
      //     <Button onPress={ this.colorchange } title='a' backgroundColor='green' color={colorarr[this.state.index]} />
      //   </View>
      //
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      // </View>
      <View style={styles.container}>
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0") } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1") } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2") } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3") } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4") } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5") } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6") } title=''/>
        </Col>


        </Row>
      </View>


        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        //
        // <Row size={14}>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Text>     </Text>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        //
        // //line
        // <Row size={14}>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Text>     </Text>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        //
        // <Row size={14}>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Text>     </Text>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        //
        //
        // <Row size={14}>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Text>     </Text>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        //
        //
        // <Row size={14}>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Text>     </Text>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        //
        //
        //
        // <Row size={14}>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Text>     </Text>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        //
        //
        // <Row size={14}>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Text>     </Text>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index]}>
        //   <Button onPress={ this.colorchange } title=''/>
        // </Col>
        // </Row>
        // </View>
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
