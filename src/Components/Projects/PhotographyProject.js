import React from 'react';
import Photo1 from '../../../src/photos/projects/photography1.png';
import Photo2 from '../../../src/photos/projects/photography2.png';
import Photo3 from '../../../src/photos/projects/photography3.png';
import Photo4 from '../../../src/photos/projects/photography4.png';

const PhotographyProject = () => {
    return (
        <div className='bg-base-200'>
            <div className='mx-4 md:mx-12 lg:mx-20'>
                <h1 className='text-center text-primary text-4xl font-semibold my-4'>Fr Photography</h1>
                <h3 className='text-2xl font-semibold my-4 mx-2'>Links</h3>
                <a className='mx-2 mt-2 bg-primary text-white p-2 rounded-lg ' href="https://fr-photography.web.app/" target={"_blank"}>Live Site</a>
                <a className='mx-2 mt-2 bg-primary text-white p-2 rounded-lg ' href="https://github.com/Omarfaruk05/fr-photography" target={"_blank"}>GitHub Code</a>
                <h3 className='text-2xl font-semibold my-4 mx-2'>Technology</h3>
                <div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>React</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>Firebase</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>React-router-dom</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>Bootstrap</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>React Bootstrap</span>
                    </div>
                </div>
                <div>
                    <h2 className='text-center text-primary text-3xl font-semibold mt-4'>Details</h2>
                </div>
            </div>
            <div className='mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg'>
                <div>
                    <img className='rounded-lg' src={Photo1} alt="" />
                </div>
                <div className=' mt-4 mx-4'>
                    <ul className=' list-disc text-xl text-primary'>
                        <li>There has a responsive navigation menu.</li>
                        <li>There every menu link work properly and when you click this link you go different page.</li>
                        <li>There has a slidding carusel by using Bootstrap.</li>
                    </ul>
                </div>
            </div>
            <div className='mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg'>
                <div>
                    <img className='rounded-lg' src={Photo2} alt="" />
                </div>
                <div className=' mt-4 mx-4'>
                    <ul className=' list-disc text-xl text-primary'>
                        <li>Products and reviews are displayed in row position for big screen and column position for mobile devise.</li>
                        <li>Buy Now button in the products card is clickable and by clicking this button you can go products details route which route is protected (Without login you cannot go.)</li>
                    </ul>
                </div>
            </div>
            <div className='mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg'>
                <div>
                    <img className='rounded-lg' src={Photo3} alt="" />
                </div>
                <div className=' mt-4 mx-4'>
                    <ul className=' list-disc text-xl text-primary'>
                        <li>This is the comment and card.</li>
                        <li>Ratting is displayed in star mark.</li>
                    </ul>
                </div>
            </div>
            <div className='mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg'>
                <div>
                    <img className='rounded-lg' src={Photo4} alt="" />
                </div>
                <div className=' mt-4 mx-4'>
                    <ul className=' list-disc text-xl text-primary'>
                        <li>Clicking in the about button you can go about section.</li>
                        <li>Here has my photo and my small biodata.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PhotographyProject;