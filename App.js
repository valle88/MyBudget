import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Principal from './components/Principal';
import uuid from 'react-native-uuid';




export default function App() {
  const [total, setTotal] = useState(0);
  const [products, setProducts]= useState([]);
  
  const addProductHandler = (prodType,importe, concepto)=>{
    const newProduct={
      id: uuid.v4(),
      name: concepto,
      cantidad: importe,
      type: prodType
    };
    setProducts(()=>[...products,newProduct]);
  };

  const removeProductHandler = (id)=>{
    setProducts(()=> products.filter(product => product.id !== id));
  };

  const removeAllProductsHandler = (id, boughtValue)=>{
    const newProduct = products.map(product=>{
      if(product.id === id){
        return{
          ...product,
          bougth: !boughtValue
        }
       
      }
      return product;
    });
    setProducts(newProduct);
  };

  
 

 
  return (
    <View style={styles.container}>
      <View style={styles.tamaño}>
        <TextInput onChangeText={setTotal}>Tu saldo actual es: {total}€  </TextInput>
        
      </View>
      <View >
       
        <Principal onProductAdd={addProductHandler} />
        
      </View>
      <View>
        
        <FlatList
        data= {products}/>
        
      
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
