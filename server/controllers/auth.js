import admin from '../firebase';
import User from '../models/user';

export const currentUser = async (req, res) => {
  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
    const user = await User.findOne({ email: firebaseUser.email });
    if (user) {
      console.log('FOUND USER =====> ', user);
      res.json(user);
    } else {
      let newUser = await new User({
        email: firebaseUser.email,
        name: firebaseUser.name ? firebaseUser.name : firebaseUser.email.split('@')[0],
        picture: firebaseUser.picture ? firebaseUser.picture : '/avatar.png',
      }).save();
      console.log('NEW USER =====> ', newUser);
      res.json(newUser);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: 'Invalid or expired token',
    });
  }
};

export const privateRoute = async (req, res) => {
  console.log('REQ HEADERS TOKEN IN PRIVATE ROUTE', req.headers.token);
  res.json({
    ok: true,
  });
};
