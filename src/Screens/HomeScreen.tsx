import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../Components';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen: FC = ({ navigation }) => {

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
    <View style={styles.container}>
     <Text>Home Screen</Text>
     <TouchableOpacity onPress={() => navigation.navigate("selectpost")}>
       <Text>Post an Image</Text>
     </TouchableOpacity>
     <Text>Log Out:</Text>
     <Button title="Logout" onPress={logout} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});