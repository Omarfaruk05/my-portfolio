import React from 'react';
import AboutMe from './AboutMe';
import BestProjects from './BestProjects';
import ContactMe from './ContactMe';
import Hero from './Hero';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <BestProjects></BestProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default HomePage;