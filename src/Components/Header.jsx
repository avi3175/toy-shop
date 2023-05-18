import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           
            <header className='bg-blue-700 py-2'>
                
                <nav className='flex justify-between mx-5 items-center mt-5 mb-10'>
                    <ul className='flex gap-5'>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/">HOME</Link></li>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/blog">BLOGS</Link></li>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/toys">ALL TOYS</Link></li>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/my-toys">MY TOYS</Link></li>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/add-toy">ADD A TOY</Link></li>
                    </ul>
                    <ul className='flex gap-5'>
                       <Link to="/login">
                       <li className='text-yellow-400 font-bold text-lg'>LOGIN</li>
                       </Link>
                       <Link to="/signup">
                       <li className='text-yellow-400 font-bold text-lg'>SIGN UP</li>
                       </Link>
                        
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;