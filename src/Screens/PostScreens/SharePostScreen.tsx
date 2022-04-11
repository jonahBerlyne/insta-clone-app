import React, { FC, useState } from 'react';
import { ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from '../../Components';
import fireDB, { storage } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const SharePostScreen = ({ route }: {route: any}): ReactElement => {
  const { image } = route.params;
  const navigation = useNavigation<any>();
  const [caption, setCaption] = useState<string>("");
  const auth = getAuth();

  const sharePost = async (): Promise<void> => {
    // if (caption === "") {
    //   Alert.alert("Please enter a caption for your post");
    //   return;
    // }
    try {
      const userId: string = auth.currentUser!.uid;
      const date: object = new Date();
      const uploadTask = ref(storage, `${userId}/posts/${date}`);
      await uploadBytes(uploadTask, image);
      const imgUrl = await getDownloadURL(uploadTask);
      const post: object = {
        caption: "another",
        date: `${date}`,
        image: imgUrl,
      };
      const docRef = doc(fireDB, "users", userId, "posts", `${date}`);
      await setDoc(docRef, post);
      Alert.alert("Posted");
      navigation.navigate("home");
    } catch (err) {
      Alert.alert(`Sharing error: ${err}`);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Text>Share Post Screen</Text>
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
    </TouchableWithoutFeedback>
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