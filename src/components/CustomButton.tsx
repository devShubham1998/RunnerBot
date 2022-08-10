import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {appColors, width} from '../config/env';

type customButtonProps = {
  title: string;
  type: string;
  onPressFn: any;
  style?: any;
  bc?: string;
  bgc?: string; // background color
  br?: number; // border radius
  w?: number; // width
  sc?: string; // shadow color
};

const CustomButton = ({
  title,
  type,
  bc,
  onPressFn,
  style,
  bgc = 'rgba(6,146,239,1)',
  br = 30,
  w = 250,
  sc = 'rgba(6,146,239,1)',
}: customButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPressFn}
      style={{
        backgroundColor: bgc,
        padding: 10,
        borderRadius: br,
        alignItems: 'center',
        shadowColor: sc,
        elevation: 8,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1.0,
        width: w,
        ...style,
      }}>
      <Text style={{color: appColors.white}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
