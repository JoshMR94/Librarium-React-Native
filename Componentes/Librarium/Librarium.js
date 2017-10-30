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

import {
  StackNavigator,
} from 'react-navigation';

import MisLibros from './MisLibros/MisLibros';

export default class Librarium extends Component {

  constructor() {
    super();

    this.onPressButton = this.onPressButton.bind(this);
  }

  render() {   
    return (   
      <View>
        <View>
          <Header
            centerComponent={{ text: 'LIBRARIUM', style: { color: '#000' } }} 
          />
        </View>
        <View style={styles.botones}>
          <View style={styles.botonSup}>
            <Button 
              raised
              large
              icon={{name: 'book'}}
              title='Mis Libros'
              /*onPress={() => navigation.navigate('MisLibros')}*/
              onPress={this.onPressButton}
              />
          </View>
          <View style={styles.boton}>
            <Button 
              raised
              large
              icon={{name: 'face'}}
              title='Mis Autores' />
          </View>
          <View style={styles.boton}>
            <Button style={styles.boton}
              raised
              large
              icon={{name: 'accessibility'}}
              title='Mi Cuenta' />
          </View>
          <View style={styles.boton}>
            <Button style={styles.boton}
              raised
              large
              icon={{name: 'settings'}}
              title='Mis Opciones' />
          </View>
        </View>
      </View>
    );
  }

  onPressButton() {
    const { navigate } = this.props.navigation;
    
    var options = {
      title: strings.app_name,
      content: strings.create_message,
      positiveText: strings.OK,
      onPositive: () => navigate("MisLibros")
    };
    var dialog = new DialogAndroid();
    dialog.set(options);
    dialog.show();
  }

}

const RootNavigator = StackNavigator({
  Librarium: {
    screen: Librarium,
  },
  MisLibros: {
    screen: MisLibros,
  },
});

const styles = StyleSheet.create({
  header: {
  },
  botones: {
    paddingTop: 100
  },
  botonSup: {
  },
  boton: {
    paddingTop: 20
  }
})
