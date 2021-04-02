import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
     
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        }
    return (
        <div className=" buttonGoogle">
            <button className="button btn btn-primary" onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;