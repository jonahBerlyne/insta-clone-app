import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditProfileScreen, HomeScreen, ProfileScreen, SelectPostScreen, SharePostScreen, SearchScreen } from '../Screens';
import { Header, Search } from '../Components';
import { Camera } from '../Components';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNav = (): ReactElement => {

  const navigation = useNavigation<any>();
  return (
    <Navigator screenOptions={{headerBackground: () => <Header />}}>
      <Screen name="home" component={HomeScreen} options={{headerTitle: "Home", headerRight: () => {
        return (
          <View style={{flex: 1, flexDirection: "row"}}>
            <Camera />
            <Search />
          </View>
        )
      }}} />
      <Screen name="search" component={SearchScreen} options={{headerTitle: "Search"}} />
      <Screen name="profile" component={ProfileScreen} options={{headerTitle: "Profile"}} />
      <Screen name="editprofile" component={EditProfileScreen} options={{headerTitle: "Edit Profile"}} />
      <Screen name="selectpost" component={SelectPostScreen} options={{headerTitle: "New post"}} />
      <Screen name="sharepost" component={SharePostScreen} options={{headerTitle: "Share post"}} />
    </Navigator>
  )
}

export default AppNav;