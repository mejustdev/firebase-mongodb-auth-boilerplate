import { parseCookies } from 'nookies';
import axios from 'axios';

const Profile = () => {
  return (
    <div className='container'>
      <h2>Create your awesome profile</h2>
      <p className='lead'>This is protected page for logged in user only</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    //   console.log("NOOKIES SENDING TOKEN", cookies);
    const { data } = await axios.get(`${process.env.api}/private-route`, {
      headers: {
        token: cookies.token,
      },
    });
    if (data.ok) return { props: {} };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  }
}

export default Profile;
