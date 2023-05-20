import React from 'react';
import Resume from '../../../src/Omar-Faruk-Resume (8).pdf';
import MyPhoto from '../../../src/photos/profile/download.png'
import { DownloadIcon } from '@heroicons/react/outline';
import InfoCard from './InfoCard';

const Hero = () => {
    return (
        <>
            <div class="lg:h-[60vh] bg-rose-300 pt-12 md:py-0 xl:px-40 md:px-20 ">
                <div class="md:flex justify-between items-center">
                    <div className='lg:w-2/4 mx-4 md:mx-0 text-white'>
                        <h1 class="text-5xl font-bold"
                            data-aos="fade-right"
                            data-aos-duration="1000">
                                Hello, I'm Omar Faruk
                        </h1>
                        <p 
                        class="py-6 mix-w-xl"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        >
                        I am a web-developer. I know HTML, CSS, javascript, Bootstrap, Tailwindcss, React, Node Js, Express Js, MongoDB. I am avail to make MERN stack projects useing this technologies.

                        </p>
                       <a href={Resume} target="_blank" download>
                            <button
                            class="btn btn-primary"
                             data-aos="fade-top"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            > <DownloadIcon className='w-4 mr-2'></DownloadIcon>
                                Resume
                            </button>
                       </a>
                    </div>
                    <div 
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="100" className='lg:h-[60vh]'>
                        <img src={MyPhoto} class="max-w-sm h-full" alt='' />
                    </div>
                </div>
            </div>
            <div 
            className='relative top-[-40px] lg:top-[-90px]  mx-8 md:px-12'
            data-aos="fade-bottom"
            data-aos-duration="1000"
            data-aos-delay="100" >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center lg:px-60 '>
                    <InfoCard></InfoCard>
                </div>
            </div>
        </>
    );
};

export default Hero;