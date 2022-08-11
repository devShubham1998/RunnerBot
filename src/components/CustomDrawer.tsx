import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {appColors} from '../config/env';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: appColors.primary,
        }}>
        <View style={{padding: 20}}>
          {/* <ImageBackground source={''} style={{padding: 20}}> */}

          <Image
            source={require('../assets/img/avatar.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            Subrata Das
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}>
              +91 99999 99999
            </Text>
            <FontAwesome5 name="phone-square" size={14} color="#fff" />
          </View>
          {/* </ImageBackground> */}
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          {/* <DrawerItemList {...props} /> */}
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
              <FontAwesome5 name="address-card" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                My Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        {/* <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
