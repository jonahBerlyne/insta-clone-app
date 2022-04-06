import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const Button : FC <Props> = ({title, onPress}) => {
 return (
  <TouchableOpacity style={styles.container} onPress={onPress}>
   <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
 );
}

export default Button;

const styles = StyleSheet.create({
 container: {
  backgroundColor: 'blue',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  padding: 5,
  paddingHorizontal: 15,
  borderRadius: 8,
  marginVertical: 10
 }, 
 text: {
  color: '#fff'
 }
});