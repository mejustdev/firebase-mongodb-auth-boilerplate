import React, { createContext, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../components/Nav';
// import { Provider } from '../context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthState from '../components/FirebaseAuthState';
import 'antd/dist/antd.css';

// create context
export const Context = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// initial state
const intialState = {
  user: 'Mehmet',
};

export default function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <FirebaseAuthState>
        <Nav />
        <ToastContainer />
        <Component {...pageProps} />
      </FirebaseAuthState>
    </Context.Provider>
  );
}
