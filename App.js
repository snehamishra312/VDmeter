import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/Screen/Splash';
import Home from './src/Screen/Home';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import LogIn from './src/Screen/LogIn';
import Color from './src/assets/Images/Color';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={Color.backGroundColor}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
