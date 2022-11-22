import {Pressable, StyleSheet, Text, View } from "react-native";
import react from "react";

const Lista =({prodId, concepto, cantidad,productType, onProductRemove})=>{
    
    
    
    return(
        <View style= {styles.lista}>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onProductRemove(prodId)}/>
            <Pressable style={{flexDirection: 'row'}} onPress={()=> onProductRemove(concepto)}/>
            <Pressable style={{flexDirection: 'row'}} onPress={()=> onProductRemove(cantidad)}/>
            <Pressable style={{flexDirection: 'row'}} onPress={()=> onProductRemove(productType)}/>
            
        </View>
    );

   
}
const styles = StyleSheet.create({
    lista:{
        borderColor: 'black',
        borderWidth: 2,
        width: '90%',
        alignItems: 'center'
    }
})

export default Lista