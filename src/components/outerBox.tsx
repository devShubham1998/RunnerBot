import {View, Text} from 'react-native';
import React from 'react';
import {appColors, fontSize, outerBoxProp} from '../config/env';

type outerBoxProps = {
  title: string; // Title of outerBox
  pt?: number; // padding of title of outerBox
  pb?: number; // padding of body of outerBox
  w?: number; // width of outerbox
  bc?: string;
  bgc?: string;
  br?: number;
  bw?: number;
};
const outerBox = (Component: JSX.IntrinsicAttributes) => {
  return ({
    title,
    pt = outerBoxProp.paddingTitle,
    pb = outerBoxProp.paddingBody,
    w = outerBoxProp.width,
    bgc = 'rgba(6,146,239,1)',
    bc = 'rgba(6,146,239,1)',
    br = 5,
    bw = 1,
  }: outerBoxProps) => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          borderRadius: br,
          borderWidth: bw,
          borderColor: bgc,
          width: w,
          shadowColor: bgc,
          elevation: 8,
          shadowOffset: {width: 5, height: 5},
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            borderBottomWidth: outerBoxProp.borderWidth,
            borderColor: bc,
            alignSelf: 'stretch',
            alignItems: 'center',
            padding: pt,
            backgroundColor: bc,
          }}>
          <Text
            style={{
              fontSize: fontSize.l,
              color: outerBoxProp.titleColor,
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'stretch',
            alignItems: 'center',
            padding: pb,
          }}>
          <Component />
        </View>
      </View>
    </View>
  );
};

export default outerBox;
