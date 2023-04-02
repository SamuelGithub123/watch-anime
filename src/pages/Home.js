import React, { } from 'react';
import VideoHeader from '../components/VideoHeader';
import EpisodeList from '../components/EpisodeList';
import data from '../data';

const Home = () => {
    return (
        <main>
            
            <VideoHeader />
            <EpisodeList episodes={data}/>
        </main>
    )
}

export default Home;