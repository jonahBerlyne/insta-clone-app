import { useNavigation } from '@react-navigation/native';
import { Header, Footer } from '../Components';
import React, { FC, useState, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchScreen = (): ReactElement => {

 const navigation = useNavigation<any>();
 const [searchQuery, setSearchQuery] = useState<string>("");
 const onChangeSearch = (query: string) => setSearchQuery(query);

 const Children = (): ReactElement => {
  return (
   <View style={{flex: 1, flexDirection: "row"}}>
    <Searchbar
     placeholder="Search"
     onChangeText={onChangeSearch}
     value={searchQuery}
    />
    <TouchableOpacity onPress={Keyboard.dismiss}>
     <Text>Cancel</Text>
    </TouchableOpacity>
   </View>
  );
 }

 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   <View>
    <Header searchbar={<Children />} />
    <View style={styles.container}>
     <Text>Search Screen</Text>
     <Footer />
    </View>
   </View>
  </TouchableWithoutFeedback>
 );
}

export default SearchScreen;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 }
});