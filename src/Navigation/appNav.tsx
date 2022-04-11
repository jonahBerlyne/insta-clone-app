import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditProfileScreen, HomeScreen, ProfileScreen, SelectPostScreen, SharePostScreen, SearchScreen } from '../Screens';
import { Header, Search, Camera } from '../Components';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNav = (): ReactElement => {
  return (
    <Navigator screenOptions={{headerBackground: () => <Header searchbar={null} />}}>
      <Screen name="home" component={HomeScreen} options={{headerTitle: "Home", headerRight: () => {
        return (
          <View style={{flex: 1, flexDirection: "row"}}>
            <Camera />
            <Search />
          </View>
        );
      }}} />
      <Screen name="search" component={SearchScreen} options={{headerShown: false}} />
      <Screen name="profile" component={ProfileScreen} options={{headerTitle: "Profile"}} />
      <Screen name="editprofile" component={EditProfileScreen} options={{headerTitle: "Edit Profile"}} />
      <Screen name="selectpost" component={SelectPostScreen} options={{headerTitle: "New post"}} />
      <Screen name="sharepost" component={SharePostScreen} options={{headerTitle: "Share post"}} />
    </Navigator>
  )
}

export default AppNav;