import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='md:py-10 pb-5 md:flex justify-center '>
            <div className=' md:block'>
                <img className='md:h-[65vh]' src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' /><hr/>
            </div>
            <div className='  px-3 md:px-16 py-4 shadow-lg border rounded-md'>
                <div className='px-5 py-3 text-center text-4xl'>
                    <h1><span className='text-yellow-400 text-6xl' >Log</span> in</h1><hr />
                </div>
                <div className="md:col-span-5 mt-3">
                    <label for="full_name">Email Address*</label>
                    <input type="email" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Email' required/>
                </div>
                <div className="md:col-span-5 mt-3">
                    <label for="full_name">Password*</label>
                    <input type="password" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='🔐••••••' required/>
                </div>

                <div className='flex mt-2 justify-between items-center'>
                    <div className=''>
                        <input className='md:mr-2 mr-1' type='checkbox' required/>
                        <label for="full_name">Remember Me.</label>
                    </div>
                    <div className=' text-red-600'>
                        <Link to='/reset'><u>Forgot Password</u></Link>
                    </div>
                </div>
                <div className='mt-3 text-center'>
                    <button className='text-white px-24 bg-black md:px-40 py-3' type='button'>Login</button>
                </div>
                <div className='mt-4 text-center '>
                    <button className='px-9 md:px-24 bg-gray-100 py-2 text-gray-500' type='button'><span className=' font-semibold text-xl text-indigo-500'>G</span>  - Login with Google</button>
                </div>
                <div className='flex text-center justify-center mt-2'>
                    <h1 className='mr-2 text-gray-500'>Dont’t have an aceount ?</h1>
                    <Link to='/sign'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login