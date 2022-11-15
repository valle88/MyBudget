import { Pressable, StyleSheet, Text, View } from 'react-native';
import Fecha from './components/Fecha';
import Descripcion from './components/Descripcion';


export default function App() {
 
  return (
    <View style={styles.container}>
      <Descripcion />
      <Fecha/>
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
