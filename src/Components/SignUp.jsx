import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const{createUser} = useContext(AuthContext)

    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.log(error))

    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl text-center font-bold mb-8">Sign Up</h2>

                    <form onSubmit={handleSignUp}>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                name='name'
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                name='email'
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                name='password'
                            />
                        </div>
                        <div className="flex items-center justify-between">
                           <input type="submit" value="sign up"  className='bg-blue-500 text-white font-bold px-4 py-2'/>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;