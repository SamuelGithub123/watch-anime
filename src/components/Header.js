import React, { useState } from 'react';
import one_piece from '../one piece.jpg';
import Search from './Search';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Header = () => {

    const [showLinks, setShowLinks] = useState(true);

    return (
        <nav className='navbar-header'>
            <div className='header-logo'>
                <Link to='/'>
                <img src={one_piece} alt='logo' className='logo' />
                </Link>
            </div>
            <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
          {showLinks &&
            <section>
            <ul list-header>
                <li>
                    <h5><Link to='/' className='underline'>HOME</Link></h5>
                </li>
                <li>
                    <h5><Link to='/animeList' className='underline'>ANIME LIST</Link></h5>
                </li>
                <li>
                    <h5><Link to='/newSeason' className='underline'>NEW SEASON</Link></h5>
                </li>
                <li>
                    <h5><Link to='movies' className='underline'>MOVIES</Link></h5>
                </li>
            
            </ul>
        </section>
          }
            
            <div className='search'>
            <Search />
            </div>
        </nav>
    )
}

export default Header;