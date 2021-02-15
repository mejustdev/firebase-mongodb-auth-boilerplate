import React, { useEffect, useContext } from 'react';
import firebase from '../firebase';
import { Context } from '../context';

const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        dispatch({
          type: 'LOGOUT',
        });
      } else {
        const { token } = await user.getIdTokenResult();
        console.log('TOKEN', token);
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthState;
