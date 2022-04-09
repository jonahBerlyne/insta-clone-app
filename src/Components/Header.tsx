import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header: FC = () => {

  return (
   <View style={styles.header}>
   </View>
  );
}

export default Header;

const styles = StyleSheet.create({
 header: {
  width: "100%",
  height: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "red",
 },
});