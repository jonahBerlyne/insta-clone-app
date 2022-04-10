import React, { FC, useState, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Button, Post } from '../Components';
import { getAuth, signOut } from 'firebase/auth';
import fireDB from '../firebaseConfig';
import { getDocs, collection, query } from 'firebase/firestore';
import { useEffect } from 'react';

interface P {
  caption: string;
  image: string;
  date: string;
  key: number;
};

const HomeScreen = ({ navigation }: {navigation: any}): ReactElement => {

  const auth = getAuth();

  const logout = async () => {
   try {
    await signOut(auth);
    Alert.alert("You've been logged out");
   } catch (err) {
    Alert.alert(`Logout error: ${err}`);
   }
  }

  const [posts, setPosts] = useState<Array<P>>([]);

  const getPosts = async (id: string): Promise<void> => {
    try {
      const q = query(collection(fireDB, "users", id, "posts"));
      const querySnapshot = await getDocs(q);
      let postsArr: Array<P> = [];
      let key: number = 1;
      querySnapshot.forEach(doc => {
        const post = {
          caption: doc.data().caption,
          image: doc.data().image,
          date: doc.data().date,
          key
        };
        postsArr.push(post);
        key++;
      });
      setPosts(postsArr);
    } catch (err) {
      Alert.alert(`Retrieval error: ${err}`);
    }
  }

  useEffect(() => {
    getPosts(auth.currentUser!.uid);
  });

  return (
    <View style={styles.container}>
     <Text>Home Screen</Text>
     <FlatList
      data={posts}
      renderItem={({item}) => {
        return (
          <View key={item.key}>
            <Image source={{ uri: item.image }} style={{ width: 200, height: 200, flex: 1 }}  />
            <Text>{item.caption}</Text>
            <Text>{item.date}</Text>
          </View>
        );
      }}
     />
     {/* {posts.map(post => {
       return (
         <View>
          <Image source={{ uri: post.image }} style={{ width: 200, height: 200, flex: 1 }}  />
          <Text>{post.caption}</Text>
         </View>
       );
     })} */}
     <Text>Log Out:</Text>
     <Button title="Logout" onPress={logout} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});