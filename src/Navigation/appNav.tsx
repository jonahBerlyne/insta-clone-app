import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditProfileScreen, HomeScreen, ProfileScreen, SelectPostScreen, SharePostScreen } from '../Screens';
import { Header } from '../Components';
const {Navigator, Screen} = createNativeStackNavigator();

const AppNav: FC = () => {
  return (
    <Navigator screenOptions={{headerBackground: () => <Header />}}>
      <Screen name="home" component={HomeScreen} options={{headerTitle: "Home"}} />
      <Screen name="profile" component={ProfileScreen} options={{headerTitle: "Profile"}} />
      <Screen name="editprofile" component={EditProfileScreen} options={{headerTitle: "Edit Profile"}} />
      <Screen name="selectpost" component={SelectPostScreen} options={{headerTitle: "New post"}} />
      <Screen name="sharepost" component={SharePostScreen} options={{headerTitle: "Share post"}} />
    </Navigator>
  )
}

export default AppNav;