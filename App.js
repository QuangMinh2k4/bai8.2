// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PhoneProvider } from '../bai8.2/PhoneContext';
import SignInScreen from '../bai8.2/SingInScreen';
import HomeScreen from '../bai8.2/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PhoneProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Đăng nhập' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PhoneProvider>
  );
};

export default App;