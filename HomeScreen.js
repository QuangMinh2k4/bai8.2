// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { usePhone } from '../bai8.2/PhoneContext';

const HomeScreen = () => {
  const { phoneNumber } = usePhone();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Chào mừng bạn!</Text>
      <Text style={styles.phoneNumberText}>Số điện thoại của bạn: {phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 10,
  },
  phoneNumberText: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;