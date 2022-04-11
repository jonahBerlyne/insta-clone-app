import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditProfileScreen, HomeScreen, ProfileScreen, SelectPostScreen, SharePostScreen } from '../Screens';
import { Header } from '../Components';
import { Camera } from '../Components';
import { AntDesign } from '@expo/vector-icons'; 

const {Navigator, Screen} = createNativeStackNavigator();

const AppNav = (): ReactElement => {
  return (
    <Navigator screenOptions={{headerBackground: () => <Header />}}>
      <Screen name="home" component={HomeScreen} options={{headerTitle: "Home", headerRight: () => {
        return (
          <View style={{flex: 1, flexDirection: "row"}}>
            <Camera />
            <AntDesign name="search1" size={24} color="black" style={{marginLeft: "10px"}} />
          </View>
        )
      }}} />
      <Screen name="profile" component={ProfileScreen} options={{headerTitle: "Profile"}} />
      <Screen name="editprofile" component={EditProfileScreen} options={{headerTitle: "Edit Profile"}} />
      <Screen name="selectpost" component={SelectPostScreen} options={{headerTitle: "New post"}} />
      <Screen name="sharepost" component={SharePostScreen} options={{headerTitle: "Share post"}} />
    </Navigator>
  )
}

export default AppNav;