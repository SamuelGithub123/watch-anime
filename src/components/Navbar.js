import React, { Component } from 'react';
import { IoMdContact } from "react-icons/io";
import {BsDiscord, BsFacebook, BsReddit, BsInstagram} from "react-icons/bs"
import {FaSnapchatGhost} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <section className='navbar-left'>
                <div className='icon'>
                    <IoMdContact />
                </div>
                
                <h6 className='login'><Link to='/login'>Login</Link> | <Link to='/signUp'>Sign Up</Link></h6>
            </section>
            <section className='navbar-middle'>
                <h6><Link to='/aboutUs'>About us</Link> | <Link to='/contactUs'>Contact us</Link></h6>
            </section>
            <section className='navbar-right'>
                <ul className='icons'>
                    <li>
                        <div><a href='https://discord.com/'><BsDiscord /></a></div>
                    </li>
                    <li>
                        <div><a href='https://facebook.com'><BsFacebook /></a></div>
                    </li>
                    <li>
                        <div><a href='https://reddit.com'><BsReddit /></a></div>
                    </li>
                    <li>
                        <div><a href='https://instagram.com'><BsInstagram /></a></div>
                    </li>
                    <li>
                        <div><a href='https://snapchat.com'><FaSnapchatGhost /></a></div>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar;