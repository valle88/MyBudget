import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import ModalCalendar from './ModalCalendar';
import Descripcion from "./Descripcion";

const Principal = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
          : onProductAdd(concepto,prodType,importe);
  
      setConcepto('');
      setImporte(0);
      setProdType('category...')
  }

  const isDisabled=()=>{
      const sanitizedName = concepto.trim();

      if (sanitizedName !== '' && prodType !=='category...') {
          return false;
      }
      return true;
  };





  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          
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
                <Button style={styles.button1}
                    title="Añadir"
                    onPress={addProductHandle}
                    disabled={isDisabled()}
                />
            </View>
        </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
            <Text>x</Text>
            </Pressable>
          
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Haz tu movimiento</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 3
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 14,
    textAlign: "center"
  },
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
},
button1:{
    borderRadius:10
}
});

export default Principal;