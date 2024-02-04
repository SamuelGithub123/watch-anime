import React, { } from 'react';
import {useState} from "react"; 

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
    }

    return (
        <section className='auth-form-container'>
        <form className='login-form' onSubmit={loginUser}>
            <label for='email'>email</label>
            <input type='email' placeholder='your email' id='email' name='email' value={email} onChange={ev => setEmail(ev.target.value)}/>
            <label for='password'>password</label>
            <input type='password' placeholder='*********' id='password' name='password' value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn'>Don't have an account? Sign Up here</button>
        </section>
    )
}

export default Login;