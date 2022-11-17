import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Descripcion from './components/Descripcion';
import Lista from './components/Lista';


export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.tamaño}>
        <TextInput>Tu saldo actual es: </TextInput>
      </View>
      <View style={styles.concepto}>
      <Descripcion />
     
      </View> 
      <View style={styles.concepto}>
        <Lista/>
      </View>    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AED6F1',
    alignItems: 'center',
    marginTop: 50,
    margin:20,
    height: '10%',
    width: '90%',

  },
  tamaño:{
    margin:20,
    height: '10%',
    width: '90%',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth:2,
    borderRadius:16
  },
  concepto:{
    width: '90%',
    borderColor: 'green',
    borderWidth:2
  }
});
