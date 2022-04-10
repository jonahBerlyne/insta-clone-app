import React, { FC, ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { EditProfileScreen, HomeScreen, ProfileScreen, SelectPostScreen, SharePostScreen } from '../Screens';
import { Header } from '../Components';
import { Feather } from "@expo/vector-icons";
import Camera from '../Components/Camera';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNav = ({ navigation }: {navigation: any}): ReactElement => {
  return (
    <Navigator screenOptions={{headerBackground: () => <Header />}}>
      <Screen name="home" component={HomeScreen} options={{headerTitle: "Home", headerRight: () => <Camera navigation={navigation} />}} />
      <Screen name="profile" component={ProfileScreen} options={{headerTitle: "Profile"}} />
      <Screen name="editprofile" component={EditProfileScreen} options={{headerTitle: "Edit Profile"}} />
      <Screen name="selectpost" component={SelectPostScreen} options={{headerTitle: "New post"}} />
      <Screen name="sharepost" component={SharePostScreen} options={{headerTitle: "Share post"}} />
    </Navigator>
  )
}

export default AppNav;