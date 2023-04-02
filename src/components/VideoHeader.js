import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const VideoHeader = () => {
    return (
        <nav className='navbar'>
            <section className='word'>
                <h5>RECENT RELEASE</h5>
            </section>
            <section className='numbers'>
            <ul className='pageNumbers'>
                <li><Link to='/'>1</Link></li>
                <li><Link to='/page2'>2</Link></li>
                <li><Link to='/page3'>3</Link></li>
                <li><Link to='/page4'>4</Link></li>
                <li><Link to='/page5'>5</Link></li>
            </ul>
            </section>
            
        </nav>
    )
}

export default VideoHeader;