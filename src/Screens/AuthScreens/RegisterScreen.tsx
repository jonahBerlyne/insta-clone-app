import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import fireDB from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen: FC = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();

  console.log(fireDB);

  const register = async () => {
    if (name && email && password) {
      try {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        Alert.alert(`Registration error: ${err}`);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput placeholder='Name' value={name} />
      <TextInput placeholder='Email' value={email} />
      <TextInput placeholder='Password' value={password} />
    </View>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});