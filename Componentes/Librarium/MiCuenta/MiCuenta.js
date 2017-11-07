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

    //this.pressOpcion1 = this.pressOpcion1.bind(this);

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
        <TextInput 
          onChangeText={(textPassword) => this.setState({textPassword})}
          value={this.state.textPassword}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
})
