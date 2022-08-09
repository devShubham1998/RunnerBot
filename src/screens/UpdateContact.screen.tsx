import {View, Text} from 'react-native';
import React from 'react';
import outerBox from '../components/outerBox';
import UC from '../components/UpdateContact';

const OuterBoxWrapped = outerBox(UC);

const UpdateContact = () => {
  return (
    <>
      <OuterBoxWrapped title="Please enter the policy number for the customer you want to update the contact details" />
    </>
  );
};

export default UpdateContact;
