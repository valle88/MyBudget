import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ModalCalendar from './ModalCalendar';

const Descripcion = ({onSalary}) => {
    const TYPES = ["Gastos", "Ingreso"];



    return (
        <View  style= {styles.borde}>
            <View style={styles.borrar}>
                <TextInput placeholder='Concepto' />
                <TextInput placeholder='Importe' />

            </View>
            <View style={styles.direccion}>
                <SelectDropdown
                    
                    data={TYPES}
                    onSelect={(selectItem, index) => {
                        console.log(selectItem, index)
                    }}
                    defaultButtonText={'Movimiento'}
                />
                  <ModalCalendar />
            </View>
            
            <View>
                <Button
                    title="Añadir"
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    direccion: {
        borderColor: 'red',
        borderWidth: 2,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
   
    borde: {
       
        borderColor: 'red',
        borderWidth: 2
    },
    borrar: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: 'blue',
        borderWidth: 2 

    }
});
export default Descripcion;