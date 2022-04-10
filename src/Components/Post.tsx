import React, { ReactElement } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Post = ({ item }: {item: any}): ReactElement => {

  return (
   <View key={item.key} style={styles.container}>
    <Image source={{ uri: item.image }} style={{ width: 200, height: 200, flex: 1 }}  />
    <Text>{item.caption}</Text>
    <Text>{item.date}</Text>
   </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {},
});