import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import Register from '../register/Register';
import Footer from '../footer/Footer';
//import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             navigate('/')
    //         })
    //         .catch(error => alert(error.message))
     }

    
    return (
      <>
      <Navbar />
        <div className='login'>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                
            </div>
        </div>
       <Footer />
        </>
    )
}
    
export default Login ;