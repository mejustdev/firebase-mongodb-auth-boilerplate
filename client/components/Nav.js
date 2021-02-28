import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../context';
import firebase from '../firebase/firebase.js';
import { useRouter } from 'next/router';

const Nav = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;
  const router = useRouter();

  const handleLogout = async () => {
    await firebase.auth().signOut();
    dispatch({
      type: 'LOGOUT',
    });
    router.push('/login');
  };

  return (
    <nav className='nav bg-light d-flex justify-content-between'>
      <Link href='/'>
        <a className='nav-link'>Home</a>
      </Link>

      <Link href={user ? '/user/new-profile' : '/login'}>
        <a className='nav-link'>Create new profile</a>
      </Link>

      {user ? (
        <a onClick={handleLogout} className='nav-link'>
          Logout
        </a>
      ) : (
        <Link href='/login'>
          <a className='nav-link'>Login</a>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
