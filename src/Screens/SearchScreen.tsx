import { useNavigation } from '@react-navigation/native';
import React, { FC, useState, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

const SearchScreen = (): ReactElement => {

 const navigation = useNavigation<any>();

 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   <View style={styles.container}>
    <Text>Search Screen</Text>
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