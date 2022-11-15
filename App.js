import { Pressable, StyleSheet, Text, View } from 'react-native';
import Fecha from './components/Fecha';
import Descripcion from './components/Descripcion';
import Comprobacion from './components/Comprobacion';
import Movimientos from './components/Movimientos';



export default function App() {
  return (

    <View style={styles.container}>
      <Descripcion />
      <Fecha />
      <Pressable>
        <Text>hola</Text>
      </Pressable>
      <Comprobacion />
      <Movimientos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    marginTop: 50

  },
});
