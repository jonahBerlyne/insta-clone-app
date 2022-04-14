import React, { FC, useState, ReactElement } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Button, Post, Footer } from '../Components';
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

  const auth: any = getAuth();

  // const logout = async (): Promise<void> => {
  //  try {
  //   await signOut(auth);
  //   Alert.alert("You've been logged out");
  //  } catch (err) {
  //   Alert.alert(`Logout error: ${err}`);
  //  }
  // }

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
    // console.log(auth);
    return () => {
      setPosts([]);
    }
  });

  return (
    <View style={styles.container}>
     <Text>Home Screen</Text>
     <FlatList
      data={posts}
      renderItem={({item}) => <Post item={item} />}
     />
     {/* <Button title="Logout" onPress={logout} /> */}
     <Footer />
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