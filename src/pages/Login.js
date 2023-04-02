import React, { } from 'react';

const Login = () => {

    return (
        <section className='auth-form-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <label for='email'>email</label>
            <input type='email' placeholder='your email' id='email' name='email' />
            <label for='password'>password</label>
            <input type='password' placeholder='*********' id='password' name='password' />
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn'>Don't have an account? Sign Up here</button>
        </section>
    )
}

export default Login;