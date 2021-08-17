/* eslint-disable quotes */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdBTYZdI7S5lFnwTdlfj3wDXo6QC4eExs",
  authDomain: "red-social-nova.firebaseapp.com",
  projectId: "red-social-nova",
  storageBucket: "red-social-nova.appspot.com",
  messagingSenderId: "596012663423",
  appId: "1:596012663423:web:6b94f492f4baa439baf54a",
  measurementId: "G-QH0SRDMMYS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const signUpWithPassword = (email, password, repeatPassword, username) =>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}