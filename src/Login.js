import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from './firebase';
import { login, selectUser } from './features/userSlice';

function Login() {
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(selectUser);

    // Pour déclancher les méthodes ()
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(
                (userAuth) => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: userAuth.user.photoURL,
                    }
                    ))
                }
            ).catch((error) => alert(error));
    }

    const register = () => {
        if (!name || !email || !password) {
            return alert('Make sure to enter all the necessary information (Full Name, Email, Password)')
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }))
                    })
            }).catch((error) => alert(error));
    }
    return (
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg' alt='' />
            <form>

                <br></br>
                <br></br>
                <input type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Full name : ' />

                <input type='text'
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder='Profil picture URL : ex : https://website/img.png ' />

                <br></br>

                <input type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email : ' />

                <input type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password : ' />

                <div className='div_buttons'>
                    <button type='submit' onClick={loginToApp}>Login</button>
                    <button type='submit' onClick={register}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login
