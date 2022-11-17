import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

const ModalCalendar = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const onDateChange = (date, type) => {
        //function to handle the date change
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
                                                'Mon',
                                                'Tue',
                                                'Wed',
                                                'Thur',
                                                'Fri',
                                                'Sat',
                                                'Sun'
                                            ]}
                                        months={[
                                            'January',
                                            'Febraury',
                                            'March',
                                            'April',
                                            'May',
                                            'June',
                                            'July',
                                            'August',
                                            'September',
                                            'October',
                                            'November',
                                            'December',
                                        ]}
                                        previousTitle="<"
                                        nextTitle=">"
                                        todayBackgroundColor="#e6ffe6"
                                        selectedDayColor="#66ff3"
                                        selectedDayTextColor="#000000"
                                        scaleFactor={700}
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
                <Text style={styles.textStyle}>Fecha</Text>
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
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
        margin: 2,
        padding: 14
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
        marginBottom: 15,
        textAlign: "center"
    }
});
export default ModalCalendar;