import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const Descripcion = () => {
    const TYPES = ["Gastos", "Ingreso"];

    return (
        <View >
            <View style={styles.direccion}>
                <TextInput placeholder='Concepto' />
                <TextInput placeholder='Importe' />
                <Button
                    title="Añadir"
                />
            </View>
            <View style={styles.alinear}>
            <SelectDropdown
                style={styles.borrar}
                data={TYPES}

                onSelect={(selectItem, index) => {
                    console.log(selectItem, index)
                }}
                defaultButtonText={'Movimiento'}
            />
             <TextInput placeholder='hola'/>
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
    alinear: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'blue',
        borderWidth: 2
    },
    borde: {
        borderColor: 'red',
        borderWidth: 2
    },
    borrar: {
        margin: 0,
        borderColor: 'blue',
        borderWidth: 2,

    }
});
export default Descripcion;