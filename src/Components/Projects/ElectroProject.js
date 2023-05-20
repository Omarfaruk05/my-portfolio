import React from 'react';
import Photo1 from '../../../src/photos/projects/electro-mart1.png';
import Photo2 from '../../../src/photos/projects/electro-mart2.png';
import Photo3 from '../../../src/photos/projects/electro-mart3.png';
import Photo4 from '../../../src/photos/projects/electro-mart4.png';
import Photo5 from '../../../src/photos/projects/electro-mart5.png';

const ElectroProject = () => {
    return (
        <div className='bg-base-200'>
            <div className='mx-4 md:mx-12 lg:mx-20'>
                <h1 className='text-center text-primary text-4xl font-semibold my-4'>Electro Mart</h1>
                <h3 className='text-2xl font-semibold my-4 mx-2'>Links</h3>
                <a className='mx-2 mt-2 bg-primary text-white p-2 rounded-lg ' href="https://electro-mart-36ca8.web.app/" target={"_blank"}>Live Site</a>
                <a className='mx-2 mt-2 bg-primary text-white p-2 rounded-lg ' href="https://github.com/Omarfaruk05/electro-mart-as-11" target={"_blank"}>GitHub Client Side Code</a>
                <a className='mx-2 mt-2 bg-primary text-white p-2 rounded-lg ' href="https://github.com/Omarfaruk05/electro-mart-as-11-server" target={"_blank"}>GitHub Server Side Code</a>
                <h3 className='text-2xl font-semibold my-4 mx-2'>Technology</h3>
                <div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>React</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>Node Js</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>Express Js</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>MongoDB</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>Stripe</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>Firebase</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>React-router-dom</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>React-hook-forms</span>
                    </div>
                    <div className='bg-accent font-semibold inline-block px-4 py-2 rounded-xl m-1'>
                        <span>DotENV</span>
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
                        <li>Products are displayed in row position for big screen and column position for mobile devise.</li>
                        <li>Update button in the products card is clickable and by clicking this button you can go products details route which route is protected (Without login you cannot go.)</li>
                    </ul>
                </div>
            </div>
            <div className='mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg'>
                <div>
                    <img className='rounded-lg' src={Photo3} alt="" />
                </div>
                <div className=' mt-4 mx-4'>
                    <ul className=' list-disc text-xl text-primary'>
                        <li>This is a log in page. There has also register page. Login and Register is completed by firebase.</li>
                    </ul>
                </div>
            </div>
            <div className='mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg'>
                <div>
                    <img className='rounded-lg' src={Photo4} alt="" />
                </div>
                <div className=' mt-4 mx-4'>
                    <ul className=' list-disc text-xl text-primary'>
                        <li>This is the products details page.</li>
                        <li>Here you can click on the deleverd button and for these quantity is decreased.</li>
                        <li>You can also restock this products.</li>
                    </ul>
                </div>
            </div>
            <div className='mx-4 my-20 p-4 bg-white md:mx-24 lg:mx-72 rounded-lg'>
                <div>
                    <img className='rounded-lg' src={Photo5} alt="" />
                </div>
                <div className=' mt-4 mx-4'>
                    <ul className=' list-disc text-xl text-primary'>
                        <li>This is the all products section page. Here you can delete any product if you want.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ElectroProject;