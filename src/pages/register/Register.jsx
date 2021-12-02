import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import './Register.css'
import Footer from '../footer/Footer';

//import { userActions } from '../_actions';

function Register() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    return (
        <>
        <Navbar />
        <div className='reg'>
            

            <div className='reg__container'>
                <h1>Sign-up</h1>

                <form>
                <h5>First Name</h5>
                    <input type='text' value={fname} onChange={e => setFname(e.target.value)} />

                    <h5>Last Name</h5>
                    <input type='text' value={lname} onChange={e => setLname(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                
            </div>
        </div>
        <Footer />
        </>
    )    
}

export default Register;