import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>

            <header className='bg-blue-700 py-2'>

                <nav className='flex justify-between mx-5 items-center mt-5 mb-10'>
                    <ul className='flex gap-5'>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/">HOME</Link></li>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/blog">BLOGS</Link></li>
                        <li className='text-yellow-400 font-bold text-lg'><Link to="/addtoy">ADD A TOY</Link></li>


                        {
                            user ? <li className='text-yellow-400 font-bold text-lg'><Link to="/alltoys">ALL TOYS</Link></li> : <li></li>
                        }
                        {
                            user ? <li className='text-yellow-400 font-bold text-lg'><Link to="/mytoys">MY TOYS</Link></li> : <li></li>
                        }

                        <li className='font-bold text-2xl text-yellow-300'> ★·.·´¯`·.·★ 𝙂𝙍𝙀𝘼𝙏 𝘼𝙉𝘿 𝙋𝙀𝙍𝙁𝙀𝘾𝙏 𝙏𝙊𝙔 ★·.·´¯`·.·★</li>

                    </ul>
                    <ul className='flex gap-5'>


                        {
                            user ? <li><button onClick={handleLogOut}>LOG OUT</button></li>
                                :
                                <Link to="/login">
                                    <li className='text-yellow-400 font-bold text-lg'>LOGIN</li>
                                </Link>
                        }


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