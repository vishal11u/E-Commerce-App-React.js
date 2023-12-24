import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='md:py-10 md:flex justify-center pb-5'>
            <div className=' md:block'>
                <img className='md:h-[80vh] md:mt-12' src='https://img.freepik.com/free-vector/forms-concept-illustration_114360-8290.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' /><hr/>
            </div>
            <div className='  px-3 md:px-10 py-5 shadow-lg border rounded-md'>
                <div className='px-5 py-3 text-center text-4xl'>
                    <h1><span className='text-yellow-400 text-6xl' > Sign</span> Up</h1><hr />
                </div>
                <div className='md:flex justify-between gap-4'>
                    <div className="md:col-span-5 mt-3">
                        <label for="full_name">First Name*</label>
                        <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Name' required/>
                    </div>
                    <div className="md:col-span-5 mt-3">
                        <label for="full_name">last Name*</label>
                        <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Surname' required/>
                    </div>
                </div>

                <div className='md:flex justify-between gap-4'>
                    <div className="md:col-span-5 mt-3">
                        <label for="full_name">Email Address*</label>
                        <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='@gmail.com' required/>
                    </div>
                    <div className="md:col-span-5 mt-3">
                        <label for="full_name">Phone*</label>
                        <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='+91 **********' required/>
                    </div>
                </div>

                <div className="md:col-span-5 mt-3">
                    <label for="full_name">Country*</label>
                    <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Your Address' required/>
                </div>

                <div className="md:col-span-5 mt-3">
                    <label for="full_name">Address*</label>
                    <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='Your Address' required/>
                </div>

                <div className='md:flex justify-between gap-4'>
                    <div className="md:col-span-5 mt-3">
                        <label for="full_name">City*</label>
                        <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='India/Satara' required/>
                    </div>
                    <div className="md:col-span-5 mt-3">
                        <label for="full_name">Postcode / ZIP*</label>
                        <input type="text" name="full_name" id="full_name" className="h-10  border mt-1 rounded md:px-4 w-full bg-gray-50" placeholder='000000' required/>
                    </div>
                </div>

                <div className='flex mt-2'>
                    <div className=''>
                        <input className='md:mr-2 mr-1' type='checkbox' />
                        <label for="full_name">I agree alltarm and conditionin<span className='text-indigo-600 px-1'>V-Store.</span> </label>
                    </div>
                </div>
                <div className='mt-3 text-center'>
                    <button className='text-white px-24 bg-black md:px-40 py-3' type='button'>Sign Up</button>
                </div>
                <div className='mt-4 text-center '>
                    <button className='px-9 md:px-24 bg-gray-100 py-2 text-gray-500' type='button'><span className=' font-semibold text-xl text-indigo-500'>G</span>  - Sign with Google</button>
                </div>
                <div className='flex text-center justify-center mt-2'>
                    <h1 className='mr-2 text-gray-500'>Dont’t have an aceount ?</h1>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp