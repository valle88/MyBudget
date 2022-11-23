import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';
import Balance from './components/Balance';




export default function App() {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let count = 0;
    products.forEach((producto) => {
      count += Number(producto.cantidad);
    })
    setTotal(count);
  }, [total, products])

  const addProductHandler = (concepto, importe, prodType) => {
    const newProduct = {
      id: uuid.v4(),
      name: concepto,
      cantidad: importe,
      type: prodType
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
  //hacer funcion gastos

  const ingresas = () => {
    if (produtType === 'ingresos') {
      const res = total + importe
      return res
    } else if (productType === 'gasto') {
      res = total - importe

    }
    return res;
  }
  const renderItem = ({ item }) => (
    <ListItem title={item.title} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.tamaño}>
        <TextInput onChangeText={setTotal}>Tu saldo actual es: {total}€  </TextInput>
      </View>
      <View >
        <Balance onProductAdd={addProductHandler} />
      </View>
      <View>
        <SafeAreaView style={styles.container1}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
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
  container1: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});
