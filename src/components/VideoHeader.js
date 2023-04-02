import React, {  } from 'react';
import { Link } from 'react-router-dom';

const VideoHeader = () => {
    return (
        <nav className='video-header'>
            <section className='word'>
                <h5 className='color-black'>RECENT RELEASE</h5>
            </section>
            <section className='numbers'>
            <ul className='pageNumbers'>
                <li><Link to='/' className='color-black'>1</Link></li>
                <li><Link to='/page2' className='color-black'>2</Link></li>
                <li><Link to='/page3' className='color-black'>3</Link></li>
                <li><Link to='/page4' className='color-black'>4</Link></li>
                <li><Link to='/page5' className='color-black'>5</Link></li>
            </ul>
            </section>
            
        </nav>
    )
}

export default VideoHeader;