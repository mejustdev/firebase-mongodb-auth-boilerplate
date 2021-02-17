import React, { useEffect, useContext } from 'react';
import firebase from '../firebase';
import { Context } from '../context';
import axios from 'axios';

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
        axios
          .post(
            'http://localhost:8000/api/current-user',
            {},
            {
              headers: {
                token,
              },
            },
          )
          .then((res) => {
            console.log('RES =====> ', res);
            dispatch({
              type: 'LOGIN',
              payload: res.data,
            });
          });
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthState;
