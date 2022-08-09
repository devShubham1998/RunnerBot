import Toast from 'react-native-toast-message';

const showToast = ( text1: string, text2: string, type : 'success' | 'error' | 'info' = 'success') => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
};

export default showToast;
