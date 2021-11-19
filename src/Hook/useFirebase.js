import { useState, useEffect } from "react";
import initializationFirebase from "../Firebase/Fireaseinit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

initializationFirebase()

const useFirebase = () => {
     
    const [user,setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


//sign in with google
const googleSignIn = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

// create a accoutn with emaiil password
    const registerUser = (email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }


//log in user 
const logInUser = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

}


//logout user
    const logOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          });
    }


    useEffect(() => {
      const unsubcribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
      });
      return () => unsubcribed;
    }, []);


    return {
      user,
      registerUser,
      logOut,
      logInUser,
      googleSignIn
    };
}


export default useFirebase;