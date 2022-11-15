
import React, { useState } from 'react';
import { StyleSheet,Text,Button, View, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';




const Date = () => {
    const TYPES = ["Gastos", "Ingreso"] ;

   
   
    return (


        <View style={styles.alinear}>
            <SelectDropdown 
                style ={styles.borrar}
                data={TYPES}

                onSelect={(selectItem, index) => {
                    console.log(selectItem, index)
                }}
                defaultButtonText={'Movimiento'}
            />
            
            <TextInput style={styles.borde} placeholder='fecha' />
        </View>




    );
};
const styles = StyleSheet.create({
    alinear: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'blue',
        borderWidth:2
    },
    borde:{
        borderColor: 'red',
        borderWidth:2
    },
    borrar:{
        margin:0,
        borderColor:'blue',
        borderWidth:2,
        
    }

});
export default Date;