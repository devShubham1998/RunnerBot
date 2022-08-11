import {View, Text} from 'react-native';
import React from 'react';
import outerBox from '../components/outerBox';
import TA from '../components/TransferAppointments';

const OuterBoxWrapped = outerBox(TA);

const TransferAppointments = () => {
  return (
    <>
      <OuterBoxWrapped title="Transfer Appointments" />
    </>
  );
};

export default TransferAppointments;
