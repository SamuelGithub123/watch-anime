import React, { useState } from 'react';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        email.preventDefault();
        console.log(email);
    }
    return (
        <section className='auth-form-container'>
        <form className='signUp-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full name</label>
            <input value={name} name='name' id='name' placeholder='your name'/>
            <label for='email'>email</label>
            <input type='email' placeholder='your email' id='email' name='email' />
            <label for='password'>password</label>
            <input type='password' placeholder='*********' id='password' name='password' />
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn'>Already have an account? Login here</button>
        </section>
    )
}

export default SignUp;