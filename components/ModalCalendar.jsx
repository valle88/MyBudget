import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

const ModalCalendar = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    
    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                       
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <SafeAreaView style={styles.container}>
                                <View style={styles.container}>


                                    <CalendarPicker
                                        startFromMonday={true}
                                        allowRangeSelection={true}
                                        minDate={new Date(2018, 1, 1)}
                                        maxDate={new Date(2050, 6, 3)}
                                        weekdays={
                                            [
                                                'Lunes',
                                                'Mart',
                                                'Mier',
                                                'Jue',
                                                'Vier',
                                                'Sab',
                                                'Dom'
                                            ]}
                                        months={[
                                            'Enero',
                                            'Febrero',
                                            'Marzo',
                                            'Abril',
                                            'Mayo',
                                            'Junio',
                                            'Julio',
                                            'Agosto',
                                            'Septiembre',
                                            'Octubre',
                                            'Noviembre',
                                            'Diciembre',
                                        ]}
                                        previousTitle="<"
                                        nextTitle=">"
                                        todayBackgroundColor="#FFFFFF"
                                        selectedDayColor="#E1F5F3"
                                        selectedDayTextColor="# 66ff3"
                                        scaleFactor={500}
                                        textStyle={{
                                            color: '#000000',
                                        }}
                                        onDateChange={onDateChange}
                                    />

                                </View>
                            </SafeAreaView>
                        </Pressable>
                    </View>
                </View>

            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>fecha</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 34,
        
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
    },
    button: {
        borderRadius: 0,
        marginLeft: 10,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        borderColor: 'white',
        borderWidth: 2,
        paddingRight: 9,
        margin:1
        
       
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
        marginBottom: 10,
        textAlign: "center"
    },
    container: {
        
        paddingTop: 10,
        backgroundColor: '#ffffff',
        padding: 10,
      },
      textStyle: {
        marginTop: 10,
      },
      titleStyle: {
        textAlign: 'center',
        fontSize: 30,
        margin: 20,
      },
});
export default ModalCalendar;