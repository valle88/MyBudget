import {StyleSheet, Text, View } from "react-native";
import react from "react";

const Lista =()=>{
    return(
        <View style= {styles.lista}>
            <Text>hola</Text>
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