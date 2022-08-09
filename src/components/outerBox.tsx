import {View, Text} from 'react-native';
import React from 'react';
import {appColors, fontSize, outerBoxProp} from '../config/env';

type outerBoxProps = {
  title: string; // Title of outerBox
  pt?: number; // padding of title of outerBox
  pb?: number; // padding of body of outerBox
  w?: number; // width of outerbox
};
const outerBox = (Component: JSX.IntrinsicAttributes) => {
  return ({
    title,
    pt = outerBoxProp.paddingTitle,
    pb = outerBoxProp.paddingBody,
    w = outerBoxProp.width,
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
          borderRadius: outerBoxProp.borderRadius,
          borderWidth: outerBoxProp.borderWidth,
          borderColor: appColors.outerBoxBorderColor,
          width: w,
        }}>
        <View
          style={{
            borderBottomWidth: outerBoxProp.borderWidth,
            borderColor: outerBoxProp.borderColor,
            alignSelf: 'stretch',
            alignItems: 'center',
            padding: pt,
            backgroundColor: outerBoxProp.titleBackColor,
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
