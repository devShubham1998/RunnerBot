import React from 'react'
import { Button, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import backImg from './assets/img/background.jpg'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';
import { appColors } from './config/env';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SingleTile from './components/SingleTile';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  
function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{backgroundColor:'rgba(52, 52, 52, 0.3)', padding:10, borderRadius:5}}>
          <SingleTile title="Appointments" icon="file-signature" m={5}/>
          <SingleTile title="Not Contacted Cases" icon="calendar-times" m={5}/>
          <SingleTile title="Transaction History" icon="history" m={5}/>
          <SingleTile title="Update Contact" icon="address-card" m={5}/>
          <SingleTile title="Other Activities" icon="calendar-check" m={5}/>
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <View style={{flexDirection:'row',backgroundColor:appColors.color1, paddingLeft:30, paddingTop:10, paddingRight:30, paddingBottom:10, borderTopLeftRadius:20, borderTopRightRadius:5, borderBottomLeftRadius:5, borderBottomRightRadius:20}}>
            <FontAwesome5 name="address-card" size={22} color={appColors.textColor1}/>
            <Text style={{color: appColors.textColor1, fontSize: 15,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 15,}}>Appointments</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar animated={true} showHideTransition={'fade'} hidden={true} />
        <ImageBackground source={backImg} style={{flex:1}}>
        <NavigationContainer  theme={MyTheme}>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} useLegacyImplementation initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} options={{title:'Runner Bot'}}/>
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default App