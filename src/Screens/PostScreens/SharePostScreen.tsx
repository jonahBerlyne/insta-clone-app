import React, { FC, useState } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image } from 'react-native';

const SharePostScreen = ({ route }: {route: any}): ReactElement => {
  const { image } = route.params;
  return (
    <View style={styles.container}>
     <Text>SharePostScreen</Text>
     {image !== "" && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

export default SharePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});