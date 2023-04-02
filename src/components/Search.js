import React, { } from 'react';
import { FaSearch } from 'react-icons/fa';


const Search = () => {

    const searchValue = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className='form'>
            <form className='search' onSubmit={handleSubmit}>
                <div className='icon'>
            <FaSearch />
            </div>
                <input type='text' name='name' id='name' ref={searchValue} placeholder='Search'></input>
            </form>
        </section>
    )
}

export default Search;