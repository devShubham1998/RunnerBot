import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors, width} from '../config/env';

type customButtonProps = {
  title: string;
  type: string;
  onPressFn: any;
  style: any;
};

const CustomButton = ({title, type, onPressFn, style}: customButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPressFn}
      style={{
        ...style,
        backgroundColor:
          type === 'p'
            ? appColors.primary
            : type === 's'
            ? appColors.secondary
            : appColors.ternary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: width.b,
      }}>
      <Text style={{color: appColors.white}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
