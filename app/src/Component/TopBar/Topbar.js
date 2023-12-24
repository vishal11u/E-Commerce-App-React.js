import React from 'react'
import { GiIndianPalace } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Topbar = () => {

    return (
        <div className=' justify-around h-10 items-center bg-yellow-400 hidden md:flex'>
            <div className='flex gap-8 text-sm'>
                <Link to='/profile' >Account</Link>
                <Link to='/track' href="##">Track Order</Link>
                <Link to='/contact' href="##">Support</Link>
            </div>
            <div className='flex gap-6'>
                <div className='flex gap-1'>
                    <p className='px-1 py-1 rounded-full text-white bg-gray-900'><GiIndianPalace size={17} /></p>
                    <select className=' cursor-pointer text-sm bg-yellow-400'>
                        <option>India</option>
                        <option>United State</option>
                        <option>Russia</option>
                    </select>
                </div>

                <select className=' cursor-pointer text-sm  bg-yellow-400'>
                    <option>INR</option>
                    <option>USD</option>
                    <option>RDR</option>
                </select>

                <select className=' cursor-pointer text-sm bg-yellow-400'>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                </select>
            </div>
        </div>
    )
}

export default Topbar