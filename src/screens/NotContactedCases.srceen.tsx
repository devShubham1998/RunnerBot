import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import NotContacted from '../components/NotContacted';
import outerBox from '../components/outerBox';

const OuterBoxWrapped = outerBox(NotContacted);

const NotContactedCases = ({navigation, route}) => {
  // Change header title
  route &&
    route.params &&
    route.params.title &&
    navigation.setOptions({headerTitle: route.params.title});

  return (
    <>
      <OuterBoxWrapped title="Select dates to see your NC cases" />
    </>
  );
};

export default NotContactedCases;
