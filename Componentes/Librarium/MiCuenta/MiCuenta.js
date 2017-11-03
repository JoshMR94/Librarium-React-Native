import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Image
} from 'react-native';
import { 
  Text, 
  Header, 
  Button 
} from 'react-native-elements';



export default class MiCuenta extends Component {

  static navigationOptions = {
    title: 'MiCuenta'
  };

  render() {
    return (
      <ScrollView>
        {/*
        <View style={styles.libro1}>
          <Image
            source={require('../../../img/hp.png')}
          />
          <Text>Harry Potter y La Piedra Filosofal</Text>
        </View>
        <View style={styles.libro2}>
          <Image
            source={require('../../../img/SherlockHolmes.png')}
          />
          <Text>Sherlock Holmes</Text>
        </View>
        */}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  libros: {
    flex: 2,
    alignItems: 'center'
  }
})
