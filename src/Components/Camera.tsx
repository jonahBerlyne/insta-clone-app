import React, {ReactElement} from "react";
import { View, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Camera = (): ReactElement => {
 const navigation = useNavigation<any>();
 return (
  <View>
   <TouchableOpacity onPress={() => navigation.navigate("selectpost")}>
    <Feather name="camera" size={24} color="black" />
   </TouchableOpacity>
  </View>
 );
}

export default Camera;