import React, { FC } from 'react';
import { ReactElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ searchbar }: {searchbar: any}): ReactElement => {

  return (
   <View style={styles.header}>
     {searchbar && searchbar}
   </View>
  );
}

export default Header;

const styles = StyleSheet.create({
 header: {
  height: "100%",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "red",
 },
});