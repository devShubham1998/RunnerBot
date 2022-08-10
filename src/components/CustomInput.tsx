import {View, Text, TextInput} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type customInputTypes = {
  style?: any;
  icon?: 'user' | 'email' | 'pass' | 'none';
  type?: 'text' | 'password';
  h?: number;
  pht?: number;
  bc?: string;
  bgc?: string;
  sc?: string;
  w?: number;
  bw?: number;
  p?: number;
  pl?: number;
};
const CustomInput = ({
  style = {},
  icon = 'none',
  type = 'text',
  h = 40,
  pht = 'Enter Data',
  bc = 'rgba(6,146,239,0.1)',
  bgc = '#fff',
  sc = 'rgba(6,146,239,0.6)',
  w = 250,
  bw = 0,
  p = 15,
  pl = {undefined},
}) => {
  const ih = h + 12;
  return (
    <View style={{...style}}>
      <TextInput
        placeholder={pht}
        placeholderTextColor={sc}
        secureTextEntry={type === 'password'}
        style={{
          borderColor: bc,
          borderWidth: bw,
          width: w,
          height: h,
          borderRadius: 30,
          shadowColor: sc,
          shadowOpacity: 1,
          elevation: 8,
          shadowOffset: {width: 0, height: 5},
          backgroundColor: bgc,
          paddingLeft: icon === 'none' ? pl | p : ih / 2 + 5,
        }}
      />
      {icon !== 'none' && (
        <View
          style={{
            borderWidth: bw,
            borderColor: bc,
            width: ih,
            height: ih,
            borderRadius: ih / 2,
            position: 'absolute',
            marginLeft: -ih / 2,
            marginTop: -(ih - h) / 2,
            backgroundColor: bgc,
            shadowColor: sc,
            shadowOpacity: 1,
            elevation: 8,
            shadowOffset: {width: 5, height: 5},
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {icon == 'user' && (
            <FontAwesome name="user-o" size={h * 0.5} color={sc} />
          )}
          {icon == 'email' && (
            <MaterialCommunityIcons
              name="email-outline"
              size={h * 0.5}
              color={sc}
            />
          )}
          {icon == 'pass' && (
            <MaterialIcons name="lock-outline" size={h * 0.5} color={sc} />
          )}
        </View>
      )}
    </View>
  );
};

export default CustomInput;
