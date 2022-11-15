import React from 'react';
import {StyleSheet, TextInput, View } from 'react-native';


const Descripcion = () => {

    return (
        <View style={styles.direccion}>
            <TextInput placeholder='Concepto' />
            <TextInput placeholder='Importe' />
            
        </View>
    )
}
const styles = StyleSheet.create({
    direccion:{
        borderColor: 'red',
        borderWidth:2,
        justifyContent: 'space-around',
        flexDirection:'row'
    }
});
export default Descripcion;