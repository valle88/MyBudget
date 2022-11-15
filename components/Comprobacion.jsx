
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';






const Comprobacion = () => {
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
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={700}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />

      </View>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});
export default Comprobacion;