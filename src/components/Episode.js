import React, {  } from 'react';

const Episode = ({id, image, link, title, episode}) => {
    return (
        <article className='episode'>
          <div className='img-container'>
            <a href={link}><img src={image} alt={title} /></a>
        </div>
        <div className='episode-footer'>
          <h3>{title}</h3>
          <h4>{episode}</h4>
        </div>
    </article>
    )
}

export default Episode;