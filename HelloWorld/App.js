import React, { Component } from 'react';
import { AppRegistry, View, Button, Alert, ButtonGroup, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';

const colorarr = ["black", "blue", "cyan", "green", "magenta", "red", "yellow"];
const conum = 7;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index0: [0, 1, 2, 3, 4, 5, 6],
      index1: [0, 1, 2, 3, 4, 5, 6],
      index2: [0, 1, 2, 3, 4, 5, 6],
      index3: [0, 1, 2, 3, 4, 5, 6],
      index4: [0, 1, 2, 3, 4, 5, 6],
      index5: [0, 1, 2, 3, 4, 5, 6],
      index6: [0, 1, 2, 3, 4, 5, 6],
    }
  }

  _colorchange(idx, i){
    temp = this.state[idx]
    temp[i] = (temp[i] + 1) % conum;
    this.setState({ [idx]: temp});
  }


  render() {
    return (

      <View style={styles.container}>
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0[0]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0", 0) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0[1]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0", 1) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0[2]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0", 2) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0[3]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0", 3) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0[4]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0", 4) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0[5]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0", 5) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index0[6]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index0", 6) } title=''/>
        </Col>
        </Row>

        //line 1
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1[0]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1", 0) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1[1]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1", 1) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1[2]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1", 2) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1[3]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1", 3) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1[4]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1", 4) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1[5]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1", 5) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index1[6]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index1", 6) } title=''/>
        </Col>
        </Row>


        //line2
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2[0]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2", 0) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2[1]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2", 1) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2[2]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2", 2) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2[3]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2", 3) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2[4]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2", 4) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2[5]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2", 5) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index2[6]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index2", 6) } title=''/>
        </Col>
        </Row>



        //line 3
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3[0]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3", 0) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3[1]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3", 1) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3[2]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3", 2) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3[3]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3", 3) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3[4]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3", 4) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3[5]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3", 5) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index3[6]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index3", 6) } title=''/>
        </Col>
        </Row>

        //line 4
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4[0]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4", 0) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4[1]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4", 1) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4[2]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4", 2) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4[3]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4", 3) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4[4]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4", 4) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4[5]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4", 5) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index4[6]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index4", 6) } title=''/>
        </Col>
        </Row>

        //line 5
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5[0]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5", 0) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5[1]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5", 1) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5[2]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5", 2) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5[3]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5", 3) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5[4]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5", 4) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5[5]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5", 5) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index5[6]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index5", 6) } title=''/>
        </Col>
        </Row>

        //line 6
        <Row size={14}>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6[0]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6", 0) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6[1]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6", 1) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6[2]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6", 2) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6[3]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6", 3) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6[4]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6", 4) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6[5]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6", 5) } title=''/>
        </Col>
        <Col sm={2} md={4} lg={3} backgroundColor={colorarr[this.state.index6[6]]}>
          <Text>     </Text>
          <Button onPress={ () => this._colorchange("index6", 6) } title=''/>
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
