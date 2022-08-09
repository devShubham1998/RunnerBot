import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';

import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {width} from '../config/env';
import CustomButton from './CustomButton';
import {compareAsc} from 'date-fns';
import showToast from '../helpers/showToast';

const NotContacted = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [fromDatePickerStatus, setFromDatePickerStatus] = useState(false);
  const [toDatePickerStatus, setToDatePickerStatus] = useState(false);

  const btnSubmit = useCallback(() => {
    toDate.setHours(0, 0, 0, 0); // To compare only date set hour to zero
    fromDate.setHours(0, 0, 0, 0);
    console.log(toDate, fromDate, compareAsc(toDate, fromDate));
    if (compareAsc(toDate, fromDate) < 0) {
      showToast(
        'Invalid to date!',
        'To date should be greater then from date.',
        'error',
      );
    }
  }, [fromDate, toDate]);

  return (
    <>
      <TouchableOpacity
        onPress={() => setFromDatePickerStatus(true)}
        style={{...style.dateInput}}>
        <Text>From: {fromDate.toDateString()}</Text>
        <Ionicons style={{marginLeft: 20}} name="calendar-sharp" size={22} />
      </TouchableOpacity>
      <DatePicker
        modal
        open={fromDatePickerStatus}
        date={fromDate}
        mode="date"
        onConfirm={date => {
          setFromDatePickerStatus(false);
          setFromDate(date);
        }}
        onCancel={() => {
          setFromDatePickerStatus(false);
        }}
      />
      <TouchableOpacity
        onPress={() => setToDatePickerStatus(true)}
        style={{
          ...style.dateInput,
          marginVertical: 20,
        }}>
        <Text>To: {toDate.toDateString()}</Text>
        <Ionicons style={{marginLeft: 20}} name="calendar-sharp" size={22} />
      </TouchableOpacity>

      <DatePicker
        modal
        open={toDatePickerStatus}
        date={toDate}
        mode="date"
        onConfirm={date => {
          setToDatePickerStatus(false);
          setToDate(date);
        }}
        onCancel={() => {
          setToDatePickerStatus(false);
        }}
      />
      <CustomButton title="SUBMIT" type="t" onPressFn={btnSubmit} />
    </>
  );
};

export default NotContacted;

const style = StyleSheet.create({
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'rgba(20,20,20,0.3)',
    width: width.i,
  },
});
