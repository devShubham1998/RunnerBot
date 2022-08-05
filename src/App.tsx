import { Button, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import backImg from './assets/img/background.jpg'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';

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
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
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
        <ImageBackground source={backImg} style={{flex:1}}>
        <NavigationContainer  theme={MyTheme}>
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} useLegacyImplementation initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default App