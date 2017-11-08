import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import { 
  Text, 
  Header, 
  Button,
  CheckBox 
} from 'react-native-elements';



export default class MiCuenta extends Component {

  constructor(props){
    super(props);
    this.state = { textUser: '', textPassword: '' };

    this.iniciarSesion = this.iniciarSesion.bind(this);

  }

  static navigationOptions = {
    title: 'Mi Cuenta'
  };

  render() {
    return (
      <View>
        <Text h6>Usuario:</Text>
        <TextInput 
          onChangeText={(textUser) => this.setState({textUser})}
          value={this.state.textUser}
        />
        <Text h6>Contraseña:</Text>
        <TextInput ty
          onChangeText={(textPassword) => this.setState({textPassword})}
          value={this.state.textPassword}
        />
        <Button
          title='Iniciar Sesión' 
          onPress={() => this.iniciarSesion()}  
        />
      </View>
    );
  }

  iniciarSesion() {
    if(this.state.textUser == '' || this.state.textPassword == ''){
      alert("Debe rellenar ambos campos.");
    } else {
      alert("Sesion iniciada correctamente");
    }
  }

}

const styles = StyleSheet.create({
})
