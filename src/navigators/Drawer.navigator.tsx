import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import {appColors} from '../config/env';
import Home from '../screens/Home.screen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: appColors.headerTitleBack},
        headerTintColor: appColors.headerTitleText,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{title: 'Runner Bot'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
