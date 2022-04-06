import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TextInput } from 'react-native';
import fireDB from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import Button from '../../Components/Button';

const RegisterScreen: FC = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();

  const register = async () => {
    if (name && email && password) {
      try {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        const docRef = doc(fireDB, "users", `${userAuth.user.uid}`);
        const userInfo = {
          id: userAuth.user.uid,
          name
        };
        await setDoc(docRef, userInfo);
        console.log("Registered");
      } catch (err) {
        Alert.alert(`Registration error: ${err}`);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput placeholder='Name' keyboardType='default' value={name} onChangeText={text => setName(text)} />
      <TextInput placeholder='Email' keyboardType='default' value={email} onChangeText={text => setEmail(text)} />
      <TextInput placeholder='Password' keyboardType='default' value={password} secureTextEntry onChangeText={text => setPassword(text)} />
      <Button title="Sign Up" onPress={register} />
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