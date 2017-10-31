import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { 
  Text, 
  Header, 
  Button 
} from 'react-native-elements';



export default class Cabecera extends Component {

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'LIBRARIUM', style: { color: '#000' } }} 
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({

})
