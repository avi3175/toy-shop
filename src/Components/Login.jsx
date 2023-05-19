import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
const{signIn} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
console.log(location)

const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) =>{
            event.preventDefault()
            event.preventDefault()
            const form = event.target
            const email = form.email.value
            const password = form.password.value
            console.log(email,password)


            signIn(email,password)
            .then(result=>{
                const user = result.user
                console.log(user)
                form.reset()
                navigate(from,{replace:true})
                
            })
            .catch(error=>console.log(error))



    }



    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-sm">

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
                    onSubmit={handleLogin}
                >



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="email"
                            placeholder="Enter your email"
                            name='email'
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            name='password'
                        />
                    </div>
                    <div className="flex items-center justify-between">
                    <input type="submit" value="log in"  className='bg-blue-500 text-white font-bold px-4 py-2'/>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            FORGET PASSWORD?
                        </a>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default Login;