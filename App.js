import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Prueba from './components/Prueba';
import Principal from './components/Principal';
import Descripcion from './components/Descripcion';


export default function App() {
  const [total, setTotal] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.tamaño}>
        <TextInput onChangeText={setTotal}>Tu saldo actual es: {total}€  </TextInput>
      </View>
      <View >
        <Principal />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '10%',
    padding: 10,
    width: '100%',
    backgroundColor: '#ffeeff'
  },
  tamaño: {
    marginTop: 60,
    height: '10%',
    width: '90%',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 16
  },
  concepto: {
    width: '90%',
    margin: 20,
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: '#e1bee7',


  },

});
