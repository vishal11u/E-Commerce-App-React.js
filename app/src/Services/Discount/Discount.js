import React from 'react'
import { IoMailOutline } from 'react-icons/io5'

const Discount = () => {
    return (
        <div className='md:pb-10 py-5'>
            <div className='flex md:justify-around flex-wrap py-3  md:bg-blue-200'>
                <div className=''>
                    <img className='rounded h-[42vh] bg-blue-500 md:h-[40vh] ' src='https://img.freepik.com/free-photo/active-woman-with-snow-white-smile-is-dancing-pink-wall-model-orange-blouse-listening-music_197531-14248.jpg?size=626&ext=jpg' alt='' />
                </div>
                <div className='text-center pt-36 px-2 absolute md:relative  md:pt-2'>
                    <div className=''>
                        <h1 className=' text-2xl md:text-4xl font-semibold'>Get
                            <span className=' text-yellow-400  px-2'>20%</span>
                            Off Discount Coupon
                        </h1>
                        <p className=' text-base font-light md:py-3'>by Subscribe our Newsletter</p>
                    </div>
                    <div className=' pl-2  flex md:bg-white items-center '>
                        <IoMailOutline className='bg-white hidden md:block' size={25} />
                        <input className='w-[60vw] pl-1 outline-none md:pl-3 md:pr-36 py-2  ' type='emaol' placeholder='Email Address' />
                        <button className='bg-yellow-400 py-2 md:px-3  md:py-3' type='button'>Get the Coupen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount