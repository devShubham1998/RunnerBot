import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {appColors} from '../config/env';
import {useNavigation} from '@react-navigation/native';

type singleTileType = {
  title: string;
  icon: string;
  bc: string;
  c: string;
  m: number;
  screenType?: string;
  screenData?: any;
  h?: number;
};
const SingleTile = ({
  title,
  icon,
  bc = 'rgba(6,146,239,1)',
  c = '#fff',
  m,
  screenType,
  screenData,
  h = 50,
}: singleTileType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (screenType === 'TileScreen') {
          navigation.navigate('TileScreen', {title, screenData});
        } else if (screenType === 'Individual') {
          screenData && navigation.navigate(screenData);
        }
      }}
      style={{margin: m}}>
      <View
        style={{
          width: 250,
          height: h,
          flexDirection: 'row',
          backgroundColor: bc,
          paddingLeft: 30,
          paddingTop: 10,
          paddingRight: 30,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 20,
        }}>
        <FontAwesome5 name={icon} size={22} color={appColors.textColor1} />
        <Text
          style={{
            color: c,
            fontSize: 15,
            fontFamily: 'Roboto-Medium',
            marginLeft: 15,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleTile;
