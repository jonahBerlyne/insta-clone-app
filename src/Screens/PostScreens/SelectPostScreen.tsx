import React, { FC, useState, useEffect, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { Button } from '../../Components';

const SelectPostScreen = ({ navigation }: {navigation: any}): ReactElement => {

  const [image, setImage] = useState<string>("");
  const [showView, setShowView] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        if (Platform.OS === 'ios') {
          const cameraResult = await ImagePicker.requestCameraPermissionsAsync();
          const libResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (cameraResult.granted === false && libResult.granted === false) {
            navigation.navigate("home");
            return;
          }
        }
        setShowView(true);
      } catch (err) {
        Alert.alert(`Permissions error: ${err}`);
      }
    })();
  }, []);

  const takePicture = async () => {
    try {
      if (Platform.OS === 'ios') {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
          return;
        }
      }
      let result = await ImagePicker.launchCameraAsync();
      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (err) {
      Alert.alert(`Couldn't take picture due to error: ${err}`);
    }
  }

  const pickImage = async () => {
    try {
      if (Platform.OS === 'ios') {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          return;
        }
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (err) {
      Alert.alert(`Couldn't choose picture due to error: ${err}`);
    }
  }

  useEffect(() => {
    if (image !== "") {
      navigation.navigate("sharepost", {
        image: image
      });
    }
  }, [image]);

  return (
    <View style={showView ? styles.container : {display: "none"}}>
     <Text>New post {typeof navigation}</Text>
     <Button title="Take a Picture" onPress={takePicture} />
     <Button title="Choose a Picture" onPress={pickImage} />
    </View>
  );
}

export default SelectPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});