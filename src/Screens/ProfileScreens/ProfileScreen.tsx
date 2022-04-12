import { getAuth } from 'firebase/auth';
import React, { FC, useState, useEffect, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import { Footer } from '../../Components';

const ProfileScreen = (): ReactElement => {

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