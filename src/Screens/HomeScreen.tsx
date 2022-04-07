import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../Components';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen: FC = () => {

  const auth = getAuth();

  const logout = async () => {
   try {
    await signOut(auth);
    Alert.alert("You've been logged out");
   } catch (err) {
    Alert.alert(`Logout error: ${err}`);
   }
  }

  return (
    <View>
     <Text>Home Screen</Text>
     <Text>Log Out:</Text>
     <Button title="Logout" onPress={logout} />
    </View>
  );
}

export default HomeScreen;