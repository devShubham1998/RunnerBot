import React from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import backImg from './assets/img/background3.jpg';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';
import {appColors} from './config/env';
import SingleTile from './components/SingleTile';
import Home from './screens/Home.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './navigators/Drawer.navigator';
import Appointments from './screens/Appointments.screen';
import TileScreen from './screens/Tile.screen';
import StackNavigator from './navigators/Stack.navigator';
import Toast from 'react-native-toast-message';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} showHideTransition={'fade'} hidden={true} />
      <ImageBackground source={backImg} style={{flex: 1}}>
        <NavigationContainer theme={MyTheme}>
          <StackNavigator />
        </NavigationContainer>
      </ImageBackground>
      <Toast />
    </SafeAreaView>
  );
};

export default App;
