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



export default class MisAutores extends Component {

  static navigationOptions = {
    title: 'Mis Autores',
  };

  render() {
    return (
      <ScrollView>      
        <View style={styles.libro1}>
          <Image
            source={require('../../../img/ArthurConanDoyle.png')}
          />
          <Text>Arthur Conan Doyle</Text>
        </View>
        <View style={styles.libro2}>
          <Image
            source={require('../../../img/JKRowling.png')}
          />
          <Text>J.K. Rowling</Text>
        </View>
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
