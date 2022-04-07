import React, { useState, useEffect, FC } from 'react';
import AuthNav from './authNav';
import AppNav from './appNav';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const MainNav: FC = () => {

  const [user, setUser] = useState<any>(null);
  const auth = getAuth();

  const checkUser = () => {
    onAuthStateChanged(auth, _user => {
      _user ? setUser(_user) : setUser(null);
    });
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <NavigationContainer>
      {user !== null ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
}

export default MainNav;