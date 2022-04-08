import React, { FC, useState } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from '../../Components';

const SharePostScreen = ({ route, navigation }: {route: any, navigation: any}): ReactElement => {
  const { image } = route.params;
  const [caption, setCaption] = useState<string>("");

  const sharePost = async () => {
    navigation.navigate("home");
  }

  return (
    <View style={styles.container}>
     <Text>SharePostScreen</Text>
     <View style={styles.post}>
      {image !== "" && <Image source={{ uri: image }} style={{ width: 200, height: 200, flex: 1 }}  />}
      <TextInput 
        multiline={true}
        numberOfLines={4}
        onChangeText={text => setCaption(text)}
        value={caption}
        placeholder="Write your caption here..."
        style={{flex: 1}}
      />
     </View>
     <Button title="Share Post" onPress={() => sharePost()} />
    </View>
  );
}

export default SharePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  post: {
    flex: 0,
    flexDirection: "row"
  }
});