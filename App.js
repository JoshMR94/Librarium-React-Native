import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Librarium from './Componentes/Librarium/Librarium';
import MisLibros from './Componentes/Librarium/MisLibros/MisLibros';
import MisAutores from './Componentes/Librarium/MisAutores/MisAutores';
import MiCuenta from './Componentes/Librarium/MiCuenta/MiCuenta';
import MisOpciones from './Componentes/Librarium/MisOpciones/MisOpciones';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default class App extends Component {
//   render() {
//     return (
//       <Librarium />
//     );
//   }
// }

const App = StackNavigator({
  Librarium: {screen: Librarium},
  MisLibros: {screen: MisLibros},
  MisAutores: {screen: MisAutores},
  MiCuenta: {screen: MiCuenta},
  MisOpciones: {screen: MisOpciones}
}, {
  initialRouteName: 'Librarium'
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
