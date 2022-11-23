import {Pressable, StyleSheet, Text, View } from "react-native";
import react from "react";

const ListItem =({prodId, concepto, cantidad, enDate ,productType, onProductRemove})=>{
    
    
    
    return(
        <View style= {styles.listItem}>
            
            <Pressable style={{flexDirection: 'row'}} onPress={() => onProductRemove(prodId)}/>
            <Pressable style={{flexDirection: 'row'}} onPress={()=> onProductRemove(concepto)}/>
            <Pressable style={{flexDirection: 'row'}} onPress={()=> onProductRemove(cantidad)}/>
            <Pressable style={{flexDirection: 'row'}} onPress={()=> onProductRemove(productType)}/>
            <Pressable style={{flexDirection: 'row'}} onPress={()=>onProductRemove(enDate)}/>
        </View>
    );

   
}
const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5
    },
    productImage: {
        width: 50,
        height: 50
    },
    productName: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center'
    }
})

export default ListItem