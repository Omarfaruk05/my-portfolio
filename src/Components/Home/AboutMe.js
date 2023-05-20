import React from 'react';
import Photo from '../../../src/photos/profile/my-pic6-removebg-preview.png'

const AboutMe = () => {
    return (
        <div id='about' className='bg-base-200 px-4 md:px-12'>
        <h1 className='text-4xl text-center pt-4 font-semibold text-primary'>About Me</h1>
            <div className='md:flex justify-between items-center mx-4'>
                <div className='md:w-1/2'>
                    <p className='text-xl'>I am Omar Faruk, Junior Front-End Developer Experience with React js for the Front-End and Node Express Js I use for BackEnd Develpment. As a Database to store data in the MongoDB. I want to create my carrier in Software Industry. I am curious to know something new in my life. Exploring is my passion.</p>
                </div>
                <div>
                    <img src={Photo} alt="my-pic" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;