import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCartFlatbed, FaRankingStar } from 'react-icons/fa6'
import { HiCreditCard } from 'react-icons/hi'
import { BsBookmarkStarFill, BsFillShieldLockFill } from 'react-icons/bs'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className=' flex w-[17%] '>
            <div className=' w-full top-[100px] text-gray-500  '>
                <Link to='*' className='mb-6 items-center flex hover:text-black cursor-pointer'>
                    <RxDashboard size={40} className='p-2 ' />
                    <label>Dashbaord</label>
                </Link>

                <Link to='/signIn' className='mb-6 flex items-center hover:text-black cursor-pointer'>
                    <BsFillPersonFill size={40} className='p-1.5  ' />
                    <label>Parsonal Info</label>
                </Link>

                <Link to='/' className='mb-6 flex items-center hover:text-black cursor-pointer'>
                    <HiCreditCard size={40} className='p-1.5  ' />
                    <label className=''>Payment Method</label>
                </Link>

                <Link to='/' className='mb-6 flex items-center hover:text-black cursor-pointer'>
                    <FaCartFlatbed size={40} className='p-1.5' />
                    <label className=''>Order</label>
                </Link>

                <Link to='/' className='mb-6 flex items-center hover:text-black cursor-pointer'>
                    <BsFillPersonVcardFill size={40} className='p-2 ' />
                    <label className=''>Address</label>
                </Link>

                <Link to='/' className='mb-6 flex items-center hover:text-black cursor-pointer'>
                    <BsBookmarkStarFill size={40} className='p-2 ' />
                    <label className=''>Wishlist</label>
                </Link>

                <Link to='/' className='mb-6 flex items-center hover:text-black cursor-pointer'>
                    <FaRankingStar size={40} className='p-2  ' />
                    <label className=''>Reviews</label>
                </Link>

                <Link to='/' className='mb-6 flex items-center hover:text-black cursor-pointer'>
                    <BsFillShieldLockFill size={40} className='p-2 ' />
                    <label className=''>Change Password</label>
                </Link>

                <Link to='/' className='mb-6 flex items-center hover:text-black cursor-pointer '>
                    <TbLogout size={40} className='p-1.5 ' />
                    <label className=''>Logoout</label>
                </Link>

            </div>
        </div>
    )
}

export default Navbar