import {View, Text} from 'react-native';
import React from 'react';
import DrawerNavigator from './Drawer.navigator';
import TileScreen from '../screens/Tile.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {appColors} from '../config/env';
import NotContactedCases from '../screens/NotContactedCases.srceen';
import UpdateContact from '../screens/UpdateContact.screen';
import OtherActivities from '../screens/OtherActivities.screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: appColors.headerTitleBack},
        headerTintColor: appColors.headerTitleText,
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={DrawerNavigator}
        options={{headerShown: false, orientation: 'portrait'}}
      />
      <Stack.Screen
        name="TileScreen"
        component={TileScreen}
        options={{headerShown: true, orientation: 'portrait', headerTitle: ''}}
      />
      <Stack.Screen
        name="NotContactedCases"
        component={NotContactedCases}
        options={{
          headerShown: true,
          orientation: 'portrait',
          headerTitle: 'Not Contacted Cases',
        }}
      />
      <Stack.Screen
        name="UpdateContact"
        component={UpdateContact}
        options={{
          headerShown: true,
          orientation: 'portrait',
          headerTitle: 'Update Contact',
        }}
      />
      <Stack.Screen
        name="OtherActivities"
        component={OtherActivities}
        options={{
          headerShown: true,
          orientation: 'portrait',
          headerTitle: 'Other Activities',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
