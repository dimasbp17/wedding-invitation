import React from 'react';
import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import OurStory from '../../components/OurStory';

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Jumbotron />
            </div>
            <div>
                <OurStory />
            </div>
        </>
    );
};

export default Home;
