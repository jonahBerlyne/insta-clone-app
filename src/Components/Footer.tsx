import React, { FC } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Button from './Button';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Footer: FC = () => {

  const auth: any = getAuth();
  const navigation = useNavigation<any>();

  const logout = async (): Promise<void> => {
    try {
     await signOut(auth);
     Alert.alert("You've been logged out");
    } catch (err) {
     Alert.alert(`Logout error: ${err}`);
    }
   }

  return (
   <View style={styles.footer}>
    <Button title="Home" onPress={() => navigation.navigate("home")} />
    <Button title="Profile" onPress={() => navigation.navigate("profile")} />
    <Button title="Logout" onPress={logout} />
   </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
 footer: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "red",
  bottom: 0,
 },
});