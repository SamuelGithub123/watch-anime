import React, {  } from 'react';

const Episode = ({id, image, link, title, episode}) => {
    return (
        <section className='episode'>
          <div className='img-container'>
            <a href={link}><img src={image} alt={title} /></a>
        </div>
        <div className='episode-footer'>
          <h3 className='title'>{title}</h3>
          <h4>{episode}</h4>
        </div>
    </section>
    )
}

export default Episode;