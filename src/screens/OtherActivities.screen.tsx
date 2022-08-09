import {View, Text} from 'react-native';
import React from 'react';
import outerBox from '../components/outerBox';
import OA from '../components/OtherActivities';

const OuterBoxWrapped = outerBox(OA);

const OtherActivities = () => {
  return (
    <>
      <OuterBoxWrapped title="Enter Policy No, Select option and Submit" />
    </>
  );
};

export default OtherActivities;
