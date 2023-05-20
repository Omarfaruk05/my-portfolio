import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from '../../../src/photos/profile/download.png'

const Navbar = ({children}) => {
    return (
        <div class="drawer drawer-end">
            <input id="nav-sidebar" type="checkbox" class="drawer-toggle" /> 
            <div class="drawer-content flex flex-col ">
                <div class="w-full navbar bg-accent py-2 px-0 md:px-8 lg:px-16 ">
                    <div class="flex-1 text-2xl text-white font-semibold font-serif px-2 mx-2">
                        <Link to="/">
                            <div class="avatar mt-2">
                                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="nav-sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li><NavLink className='rounded-lg mx-2 text-white font-medium text-lg' to={"/home"}>Home</NavLink></li>
                            <li><NavLink className='rounded-lg mx-2 text-white font-medium text-lg' to={"/blogs"}>Blogs</NavLink></li>
                            <li><Link className='rounded-lg mx-2 text-white font-medium text-lg' to={"/about"}>About</Link></li>
                        </ul>
                    </div>
                </div>
                {children}
            </div> 
            <div class="drawer-side">
                <label for="nav-sidebar" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100">
                <li><NavLink className='rounded-lg mx-2' to={"/home"}>Home</NavLink></li>
                    <li><NavLink className='rounded-lg mx-2 font-medium' to={"/blogs"}>Blogs</NavLink></li>
                    <li><NavLink className='rounded-lg mx-2 font-medium' to={"/about"}>About</NavLink></li>
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;