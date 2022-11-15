import { Pressable, Image, Text, View,  StyleSheet } from "react-native";
import Comprobacion from "./Comprobacion";

const Movimientos = ({productName, onProductRemove}) => {
  return (
    
    <View  style={styles.listItem} >
      <Pressable onPress={()=> onProductRemove(productName)}>
      </Pressable>
      <Text style={styles.productName}>{Comprobacion}</Text>
    </View>

   
  )
}
const styles = StyleSheet.create({
   
    
    listItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      width:'100%',
      marginTop: 15,
      borderWidth: 2,
      borderRadius:10,
      backgroundColor: '#fff',
      paddingHorizontal: 30
      
  
      
  
    },
    productImage:{
      width:50,
      height:50,
      
  
    },
    productName:{
     
      fontSize:18,
      textAlign:'center'
    }
  });
export default Movimientos