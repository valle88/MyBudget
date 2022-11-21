import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import ModalCalendar from './ModalCalendar';

const Descripcion = ({}) => {
    const prodTypes = ["Gastos", "Ingreso"];

    const [importe,setImporte]= useState(0);
    const [concepto, setConcepto]= useState('');
    const [prodType, setProdType]= useState('category...');

    const changeTextHandler = (value) => {
        setConcepto(value);
        
    }
    const changeTypeHandler = (value) =>{
        setProdType(value);
    }
    const changeImporteHandler = (value)=>{
        setImporte(value);
    }

    const addProductHandle =()=>{
        concepto.length > 20
            ? alert('te has escedido de caracteres')
            : onPorductAdd(concepto,prodType,importe);
    
        setConcepto('');
        setImporte(0);
        setProdType('category...')
    }

    const isDisabled=()=>{
        const sanitizedName = concepto.trim();

        if (sanitized !== '' && prodType !=='category...') {
            return false;
        }
        return true;
    };

    return (
        <View style={styles.border}>
            <View style={styles.textIn}>
                <TextInput placeholder='Concepto' 
                keyboardType='default'
                onChangeText={changeTextHandler} />
                <TextInput placeholder='Importe' 
                keyboardType={'number-pad'} 
                initValue={importe}
                onChange={value => changeImporteHandler(value)}/>

            </View>
            <View style={styles.direccion}>
                <SelectDropdown
                    
                    data={prodTypes}
                    onSelect={(selectItem) => {
                        changeTypeHandler(selectItem);
                    }}
                    defaultButtonText={'category...'}
                    buttonTextAfterSelection={() => {
                        return prodType;
                    }}
                    rowTextForSelection={(item) => {
                        return item;
                    }}
                    buttonStyle={styles.dropdownBtnStyle}
                    buttonTextStyle={styles.dropdownBtnTxtStyle}
                    dropdownStyle={styles.dropdownDropdownStyle}
                    rowStyle={styles.dropdownRowStyle}
                />
                
                  <ModalCalendar />
            </View>
            
            <View>
                <Button
                    onPress={()=>(importe)}
                    title="Añadir"
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    direccion: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
   
   
    textIn: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding:20
    },
    border:{
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 10
    }
   
});
export default Descripcion;