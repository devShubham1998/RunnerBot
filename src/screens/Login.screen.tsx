import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useCallback} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const Login = ({navigation, route}) => {
  const submitClicked = useCallback(() => {
    navigation.replace('BottomTabs');
  }, []);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/img/background3.jpg')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/img/logo.jpg')}
          style={{width: 100, height: 100}}
        />
        <Text style={{marginBottom: 2, fontSize: 30}}>Welcome Back!</Text>
        <Text style={{marginBottom: 40}}>Login to your account.</Text>
        <CustomInput icon="email" pht="Runner ID" style={{marginBottom: 30}} />
        <CustomInput icon="pass" pht="Mobile No" style={{marginBottom: 40}} />
        <CustomButton
          title="Sign In"
          w={180}
          type={''}
          onPressFn={submitClicked}
        />
      </ImageBackground>
    </View>
  );
};

export default Login;
