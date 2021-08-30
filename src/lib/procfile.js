import firebase from './secret.js';

const db = firebase.firestore();

export const setUserProcfile = (user) => {
  const doUser = db.collection('users').doc(user.uid);
  doUser.get().then((doc) => {
    if (doc.exists) {
      // is ok
    } else {
      db.collection('users').doc(user.uid).set({
        uid: `${user.uid ? user.uid : ''}`,
        displayName: `${user.displayName ? user.displayName : null}`,
        email: user.email,
        photoURL: `${user.photoURL ? user.photoURL : 'https://w7.pngwing.com/pngs/601/312/png-transparent-social-media-avatar-graphy-digital-media-profile-blue-text-logo.png'}`,
      })
        .then(() => {
          // is ok
        })
        .catch(() => {
          // error
        });
    }
  }).catch(() => {
    // error
  });
};

export const getProcfileId = (uid) => db.collection('users').doc(uid).get();
