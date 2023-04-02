import React, {  } from 'react';
import Episode from './Episode';

const EpisodeList = ({episodes}) => {


    return (
    <section className='section'>
      <div className='episodeList-center'>
        {episodes.map((episode) => {
          return <Episode key={episode.id} {...episode} />
        })}
      </div>
    </section>   
     )
}

export default EpisodeList;