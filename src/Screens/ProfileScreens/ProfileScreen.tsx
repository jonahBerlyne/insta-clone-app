import { getAuth } from 'firebase/auth';
import React, { FC, useState, useEffect, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import { Footer } from '../../Components';
import fireDB from '../../firebaseConfig';
import { collection, query, getDocs, getDoc, doc} from "firebase/firestore";

const ProfileScreen = ({ route }: {route: any}): ReactElement => {

  const { id } = route.params;
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    getUserInfo();

    return () => {
      setUserInfo(null);
    }
  }, []);

  const getUserInfo = async () => {
    try {
      const i = doc(fireDB, "users", id);
      const docSnapshot = await getDoc(i);
      console.log(docSnapshot.data());
      setUserInfo(docSnapshot.data());
    } catch (err) {
      Alert.alert(`Retrieval error: ${err}`);
    }
  }

  // useEffect(() => {
  //   console.log(userInfo);
  // }, [userInfo]);

  const auth = getAuth();
  const profilePic: any = auth.currentUser?.photoURL;
  return (
    <View style={styles.container}>
     <View style={styles.profilePic}>
      <Image source={{ uri: profilePic }} style={{height: 100, width: 100}}  />
     </View>
     <Text>{auth.currentUser?.displayName}</Text>
     <Footer />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    width: 100, 
    height: 100,
    borderColor: "black",
    borderRadius: 100,
    borderWidth: 1
  },
});