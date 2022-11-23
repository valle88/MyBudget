import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';
import Balance from './components/Balance';




export default function App() {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const addProductHandler = (prodType, importe, concepto, enDate) => {
    const newProduct = {
      id: uuid.v4(),
      name: concepto,
      cantidad: importe,
      type: prodType,
      fecha: enDate

    };
    
    setProducts(() => [...products, newProduct]); 
    
  };

  const removeProductHandler = (id) => {
    setProducts(() => products.filter(product => product.id !== id));
  };

  const removeAllProductsHandler = (id, boughtValue) => {
    const newProduct = products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          bougth: !boughtValue
        }

      }
      return product;
    });
    setProducts(newProduct);
  };
  //hacer funcion gaastos

  const ingresas=()=>{
    if (produtType === 'ingresos') {
       const res = total + importe
       return res
    }else  if (productType === 'gasto') {
      res = total- importe
    
    }
    return res;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tamaño}>
        <TextInput onChangeText={setTotal}>Tu saldo actual es: {ingresas}€  </TextInput>
        <ListItem/>
      </View>
      <View >
        <Balance onProductAdd={addProductHandler} />
        <ScrollView>
          <View>
            {
              products.length == 0
              ?<Text>Ninguna movimiento</Text>
              :products.map(product =>(
                <ListItem 
                key={product.id}
                concepto={product.concepto}
                cantidad={product.cantidad}
                productType={product.type}
                enDate={product.enDate}
                />
              ))
            }
          </View>
        </ScrollView>
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
