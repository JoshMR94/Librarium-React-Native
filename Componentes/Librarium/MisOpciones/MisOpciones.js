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
  Button,
  CheckBox
} from 'react-native-elements';



export default class MisOpciones extends Component {

  constructor(props){
    super(props);
    this.state = {checked1: false, checked2: false, checked3: false};

    this.pressOpcion1 = this.pressOpcion1.bind(this);
    this.pressOpcion2 = this.pressOpcion2.bind(this);
    this.pressOpcion3 = this.pressOpcion3.bind(this);

    this.guardarOpciones = this.guardarOpciones.bind(this);
  }

  static navigationOptions = {
    title: 'Mis Opciones'
  };

  render() {
    return (
      <View>
        <Text h4>Lista de opciones</Text>
        <CheckBox
          title='Opción 1'
          checked={this.state.checked1}
          onPress={() => this.pressOpcion1()}
        />
        <CheckBox
          title='Opción 2'
          checked={this.state.checked2}
          onPress={() => this.pressOpcion2()}
        />
        <CheckBox
          title='Opción 3'
          checked={this.state.checked3}
          onPress={() => this.pressOpcion3()}
        />

        <Button
          title='Guardar Opciones' 
          onPress={() => this.guardarOpciones()}  
        />
      </View>
    );
  }

  pressOpcion1() {
    if(this.state.checked1 == false){
      this.setState({checked1: true});
    } else {
      this.setState({checked1: false});
    }   
  }

  pressOpcion2() {
    if(this.state.checked2 == false){
      this.setState({checked2: true});
    } else {
      this.setState({checked2: false});
    }   
  }

  pressOpcion3() {
    if(this.state.checked3 == false){
      this.setState({checked3: true});
    } else {
      this.setState({checked3: false});
    }   
  }

  guardarOpciones() {
    if(this.state.checked1 != false || this.state.checked2 != false || this.state.checked3 != false ){
      alert("Sus opciones se han guardado correctamente.");
    } else {
      alert("Debe seleccionar alguna opción.");
    }
  }

}

const styles = StyleSheet.create({
  guardar: {

  }
})
