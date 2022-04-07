import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import fireDB from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Button from '../../Components/Button';

const LoginScreen: FC = ({ navigation }) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();
  
  const login = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert("Logged in");
      } catch (err) {
        Alert.alert(`Login error: ${err}`);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder='Email' keyboardType='default' value={email} onChangeText={text => setEmail(text)} />
      <TextInput placeholder='Password' keyboardType='default' value={password} secureTextEntry onChangeText={text => setPassword(text)} />
      <Button title="Login" onPress={login} />
      <View>
        <Text>Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text>Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});