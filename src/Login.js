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
            (userAuth)=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }
                ))
            }
        ).catch((error)=>alert(error));
    }

    const register = () => {
        if(!name){
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user
                .updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch((error)=>alert(error));
    }
    return (
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg' alt='' />
            <form>
                <input type='text'
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder='Full name : ' />

                <input type='text' 
                value={profilePic} 
                onChange={(e) => setProfilePic(e.target.value)} 
                placeholder='Profil picture URL : ' />

                <input type='text' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email : ' />

                <input type='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password : ' />

                <button type='submit' onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member?
                <span onClick={register} className='login__register'> Register now</span>
            </p>
        </div>
    )
}

export default Login
