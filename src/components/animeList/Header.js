import React, {  } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='video-header'>
            <section className='word'>
                <h5 className='color-black'>ANIME LIST</h5>
            </section>
            <section className='numbers'>
            <ul className='pageNumbers'>
                <li><Link to='/A' className='color-black pageNumber'>A</Link></li>
                <li><Link to='/B' className='color-black pageNumber'>B</Link></li>
                <li><Link to='/C' className='color-black pageNumber'>C</Link></li>
                <li><Link to='/D' className='color-black pageNumber'>D</Link></li>
                <li><Link to='/E' className='color-black pageNumber'>E</Link></li>
                <li><Link to='/F' className='color-black pageNumber'>F</Link></li>
                <li><Link to='/G' className='color-black pageNumber'>G</Link></li>
                <li><Link to='/H' className='color-black pageNumber'>H</Link></li>
                <li><Link to='/I' className='color-black pageNumber'>I</Link></li>
                <li><Link to='/J' className='color-black pageNumber'>J</Link></li>
                <li><Link to='/K' className='color-black pageNumber'>K</Link></li>
                <li><Link to='/L' className='color-black pageNumber'>L</Link></li>
                <li><Link to='/M' className='color-black pageNumber'>M</Link></li>
                <li><Link to='/N' className='color-black pageNumber'>N</Link></li>
                <li><Link to='/O' className='color-black pageNumber'>O</Link></li>
                <li><Link to='/P' className='color-black pageNumber'>P</Link></li>
                <li><Link to='/Q' className='color-black pageNumber'>Q</Link></li>
                <li><Link to='/R' className='color-black pageNumber'>R</Link></li>
                <li><Link to='/S' className='color-black pageNumber'>S</Link></li>
                <li><Link to='/T' className='color-black pageNumber'>T</Link></li>
                <li><Link to='/U' className='color-black pageNumber'>U</Link></li>
                <li><Link to='/V' className='color-black pageNumber'>V</Link></li>
                <li><Link to='/W' className='color-black pageNumber'>W</Link></li>
                <li><Link to='/X' className='color-black pageNumber'>X</Link></li>
                <li><Link to='/Y' className='color-black pageNumber'>Y</Link></li>
                <li><Link to='/Z' className='color-black pageNumber'>Z</Link></li>

            </ul>
            </section>
            
        </nav>
    )
}

export default Header;