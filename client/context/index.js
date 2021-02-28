// // import
// import { createContext, useReducer } from 'react';
// // reducer
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { ...state, user: action.payload };
//     case 'LOGOUT':
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };

// // initial state
// const intialState = {
//   user: 'Mehmet',
// };
// const [state, dispatch] = useReducer(reducer, intialState);

// // create context
// const Context = createContext({});

// // context provider
// const Provider = ({ children }) => {
//   // const value = { state, dispatch };
//   return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
// };

// export { Context, Provider };
