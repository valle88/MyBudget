import React, { useState } from 'react';
import {StyleSheet, TextInput, View } from 'react-native';


const Descripcion = () => {
    const [concepto, importe, setImporte, setConcepto]= useState = ('');
    const changeTextHandler = (value) => {
        setConcepto(value);
        setImporte(value);
    }

    return (
        <View style={styles.direccion}>
            <TextInput placeholder='Concepto' onChangeText={changeTextHandler} value={concepto} />
            <TextInput placeholder='Importe' onChangeText={changeTextHandle} value={importe} />
            
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