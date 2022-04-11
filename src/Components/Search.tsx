import React, {ReactElement} from "react";
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = (): ReactElement => {
 const navigation = useNavigation<any>();
 return (
  <View>
   <TouchableOpacity onPress={() => navigation.navigate("search")}>
    <AntDesign name="search1" size={24} color="black" style={{marginLeft: "10px"}} />
   </TouchableOpacity>
  </View>
 );
}

export default Search;