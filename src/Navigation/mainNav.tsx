import React, { useState, useEffect, FC } from 'react';
import AuthNav from './authNav';
import AppNav from './appNav';
import { NavigationContainer } from '@react-navigation/native';

const MainNav: FC = () => {

  const [user, setUser] = useState<any>(null);

  return (
    <NavigationContainer>
      {user !== null ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
}

export default MainNav;