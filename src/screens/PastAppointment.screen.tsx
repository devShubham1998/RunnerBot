import {View, Text} from 'react-native';
import React from 'react';
import PA from '../components/PastAppointment';
import outerBox from '../components/outerBox';

const OuterBoxWrapped = outerBox(PA);

const PastAppointment = () => {
  return (
    <>
      <OuterBoxWrapped title="Please select the date range for your appointments" />
    </>
  );
};

export default PastAppointment;
