import React from 'react'
import {FaOpencart} from 'react-icons/fa'
import {IoReload} from 'react-icons/io5'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {GiLaurelsTrophy} from 'react-icons/gi'

const Services = () => {
  return (
    <div className=''>
        <div className='flex gap-6 justify-center flex-wrap py-5  md:py-10'>
            <div className='flex items-center gap-4 pr-7 md:pr-0'>
                <div className='text-yellow-400'>
                    <FaOpencart size={65}/>
                </div>
                <div>
                    <h1 className=' font-semibold'>Free Shipping</h1>
                    <p className=' text-gray-500 text-sm'>When ordering over $100</p>
                </div>
            </div>

            <div className='flex items-center gap-4 pr-5 md:pr-0'>
                <div className='text-yellow-400'>
                    <IoReload size={55}/>
                </div>
                <div>
                    <h1 className=' font-semibold'>Free Return</h1>
                    <p className=' text-gray-500 text-sm'>Get Return within 30 days</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div className='text-yellow-400'>
                    <AiFillSafetyCertificate size={55}/>
                </div>
                <div>
                    <h1 className=' font-semibold'>Secure Payment</h1>
                    <p className=' text-gray-500 text-sm'>100% Secure Online Payment</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div className='text-yellow-400'>
                    <GiLaurelsTrophy size={55}/>
                </div>
                <div>
                    <h1 className=' font-semibold'>Best Quality</h1>
                    <p className=' text-gray-500 text-sm'>Original Product Guarenteed</p>
                </div>
            </div>
        </div><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
    </div>
  )
}

export default Services