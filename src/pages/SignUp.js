import React, { } from 'react';
import {useState} from "react";
import axios from 'axios';

const SignUp = () => {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <section className='auth-form-container'>
        <form className='signUp-form' onSubmit={registerUser}>
            <label htmlFor='name'>Full name</label>
            <input type='text' name='name' id='name' placeholder='your name' value={name} onChange={ev => setName(ev.target.value)}/>
            <label for='email'>email</label>
            <input type='email' placeholder='your email' id='email' name='email' value={email} onChange={ev => setEmail(ev.target.value)}/>
            <label for='password'>password</label>
            <input type='password' placeholder='*********' id='password' name='password' value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button type='submit'>Register</button>
        </form>
        <button className='link-btn'>Already have an account? Login here</button>
        </section>
    )
}

export default SignUp;