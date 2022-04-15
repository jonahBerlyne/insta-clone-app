import React, { FC, useState, useEffect, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import fireDB, { storage } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = (): ReactElement => {

  const navigation = useNavigation<any>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth: any = getAuth();

  useEffect(() => {
    return () => {
      setName("");
      setEmail("");
      setPassword("");
    }
  });

  const register = async () => {
    if (name && email && password) {
      try {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png"
        });
        const uploadTask = ref(storage, `${userAuth.user.uid}/profilePic`);
        await uploadBytes(uploadTask, auth.currentUser.photoURL);
        const docRef = doc(fireDB, "users", `${userAuth.user.uid}`);
        const userInfo = {
          id: userAuth.user.uid,
          displayName: name,
          photoURL: "https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png"
        };
        await setDoc(docRef, userInfo);
        console.log("Registered");
      } catch (err) {
        Alert.alert(`Registration error: ${err}`);
      }
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <TextInput placeholder='Name' keyboardType='default' value={name} onChangeText={text => setName(text)} />
        <TextInput placeholder='Email' keyboardType='default' value={email} onChangeText={text => setEmail(text)} />
        <TextInput placeholder='Password' keyboardType='default' value={password} secureTextEntry onChangeText={text => setPassword(text)} />
        <Button title="Sign Up" onPress={register} />
        <View>
          <Text>Already Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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