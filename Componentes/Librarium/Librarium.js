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
import MisAutores from  './MisAutores/MisAutores';
import MiCuenta from './MiCuenta/MiCuenta';
import MisOpciones from './MisOpciones/MisOpciones';
import Cabecera from './Cabecera/Cabecera';

export default class Librarium extends Component {

  constructor(props) {
    super(props);

    //this.onPressButton = this.onPressButton.bind(this);

    /* https://reactnavigation.org/docs/intro/quick-start */
  }

  
  static navigationOptions = {
    title: 'Librarium',
  };
  
  render() { 
    const { navigate } = this.props.navigation;  
    return (   
      <View>
        <View style={styles.botones}>
          <View style={styles.botonSup}>
            <Button 
              raised
              large
              icon={{name: 'book'}}
              title='Mis Libros'
              onPress={() => navigate('MisLibros')}
              />
          </View>
          <View style={styles.boton}>
            <Button 
              raised
              large
              icon={{name: 'face'}}
              title='Mis Autores'
              onPress={() => navigate('MisAutores')} 
              />
          </View>
          <View style={styles.boton}>
            <Button style={styles.boton}
              raised
              large
              icon={{name: 'accessibility'}}
              title='Mi Cuenta'
              onPress={() => navigate('MiCuenta')} 
              />
          </View>
          <View style={styles.boton}>
            <Button style={styles.boton}
              raised
              large
              icon={{name: 'settings'}}
              title='Mis Opciones'
              onPress={() => navigate('MisOpciones')} 
               />
          </View>
        </View>
      </View>
    );
  }

  /*
  onPressButton(){
    navigate('Profile', { name: 'Jane' })
  }
  */

  /*
  onPressButton() {
    //const { navigate } = this.props.navigation;
    
    
    var options = {
      //title: strings.app_name,
      //content: strings.create_message,
      //positiveText: strings.OK,
      onPositive: () => this.props.navigation.navigate("MisLibros")
    };
    
    var dialog = new DialogAndroid();
    dialog.set(options);
    dialog.show();
  }
  */
}

const styles = StyleSheet.create({
  header: {
  },
  botones: {
    paddingTop: 50
  },
  botonSup: {
  },
  boton: {
    paddingTop: 20
  }
})
