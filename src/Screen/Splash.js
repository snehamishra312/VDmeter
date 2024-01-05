import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Images from '../assets/Images/Images';
import Pages from '../assets/Images/Pages';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      onPress();
    }, 3000);
  }, []);

  const onPress = async () => {
    const status = await AsyncStorage.getItem('logIn');
    const statusInJson = JSON.parse(status);
    console.log('status==>', statusInJson);
    if (statusInJson === 'login') {
      navigation.navigate('Home');
    } else {
      navigation.navigate('LogIn');
    }
  };

  return (
    // <View style={styles.container}>
    //   <Image source={Images.Splash} />
    // </View>
    <ImageBackground
      source={Images.splash}
      resizeMode="stretch"
      style={styles.image}></ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Splash;
