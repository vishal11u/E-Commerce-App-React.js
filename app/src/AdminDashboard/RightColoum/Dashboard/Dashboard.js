import React from 'react'
import { BiSolidTimer } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import { SiStarbucks } from 'react-icons/si'
import Imformation from './PersonalShop/Imformation'

const Dashboard = () => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className=' '>
                    <h1 className=' text-lg text-gray-800'>Hello, Chacha</h1>
                    <h1 className=' text-3xl font-semibold'>Welcome to your Profile</h1>
                </div>

                <div className='flex w-full gap-12'>
                    <div className='bg-gray-900 py-5  w-1/2 pr-24 pl-5 text-white mt-5 border hover:bg-yellow-500 hover:text-black transition-all'>
                        <div className=''>
                            <BiSolidTimer className='px-2 py-2 bg-white rounded-md text-yellow-500 ' size={70} />
                            <h1 className=' text-lg py-2'>New Orders</h1>
                            <h1 className=' text-5xl font-medium'>333</h1>
                        </div>
                    </div>

                    <div className='bg-gray-900 py-5 w-1/2 pr-24 pl-5 text-white mt-5 border  hover:bg-yellow-500 hover:text-black transition-all'>
                        <div className=''>
                            <TbTruckDelivery className='px-2 py-2 bg-white rounded-md text-yellow-500 ' size={70} />
                            <h1 className=' text-lg py-2'>New Orders</h1>
                            <h1 className='text-5xl font-medium'>666</h1>
                        </div>
                    </div>

                    <div className='bg-gray-900 py-5 w-1/2 pr-24 pl-5 text-white mt-5 border  hover:bg-yellow-500 hover:text-black transition-all'>
                        <div className=''>
                            <SiStarbucks className='px-2 py-2 bg-white rounded-md text-yellow-500 ' size={70} />
                            <h1 className=' text-lg py-2'>New Orders</h1>
                            <h1 className='text-5xl font-medium'>999</h1>
                        </div>
                    </div>
                </div>
                
                <Imformation/>
            </div>
        </div>
    )
}

export default Dashboard