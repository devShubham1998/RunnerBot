import {View, Text, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';
import {appColors, width} from '../config/env';
import CustomButton from './CustomButton';
import showToast from '../helpers/showToast';
import CustomDropdown from './CustomDropdown';

const OtherActivities = () => {
  const [policyNo, setPolicyNo] = useState('');
  const [dropdownValue, setDropdownValue] = useState(null);

  const dropdownData = [
    {label: 'Send e-mandate Link', value: '1'},
    {label: 'Send Online Payment Link', value: '2'},
    {label: 'Cross Sell Lead', value: '3'},
  ];

  const btnSubmit = useCallback(() => {
    if (policyNo == '') {
      showToast('Policy No Error!', 'Please Enter valid policy No.', 'error');
    }
  }, [policyNo]);
  return (
    <View>
      <TextInput
        placeholder="Policy Number"
        value={policyNo}
        onChange={t => setPolicyNo(t)}
        style={{
          width: width.i,
          borderWidth: 2,
          padding: 10,
          borderRadius: 5,
          borderColor: appColors.ibc,
        }}
      />
      <CustomDropdown
        label="Please select your option"
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        dropdownData={dropdownData}
      />
      <CustomButton
        title="SUBMIT"
        type="t"
        onPressFn={btnSubmit}
        style={{marginTop: 30}}
      />
    </View>
  );
};

export default OtherActivities;
