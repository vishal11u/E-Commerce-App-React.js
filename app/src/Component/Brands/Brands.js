import React from 'react'
import Brand1 from '../../Assets/Logo/brand-1.png'
import Brand2 from '../../Assets/Logo/brand-2.png'
import Brand3 from '../../Assets/Logo/brand-3.png'
import Brand4 from '../../Assets/Logo/brand-4.png'
import Brand5 from '../../Assets/Logo/brand-5.png'
import Brand6 from '../../Assets/Logo/brand-6.png'
import Brand7 from '../../Assets/Logo/brand-7.png'
import Brand8 from '../../Assets/Logo/brand-8.png'
import Brand9 from '../../Assets/Logo/brand-9.png'
import Brand10 from '../../Assets/Logo/brand-10.png'
import Brand11 from '../../Assets/Logo/brand-11.png'
import Brand12 from '../../Assets/Logo/brand-12.png'

const Brands = () => {
    return (
        <div className='md:py-10 px-3 py-5 bg-gray-200 md:px-60 '>
            <div className='text-4xl font-medium pb-6 md:py-'>
                <h1>Shop by Brand</h1>
            </div>

            <div className='flex flex-wrap justify-center bg-white '>
                <div className=' border-r border-b items-center w-fill '>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand1} alt='' />
                </div>
                <div className='md:border-r border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand2} alt='' />
                </div>
                <div className='border-r border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand3} alt='' />
                </div>
                <div className='md:border-r border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand4} alt='' />
                </div>
                <div className='border-r md:border-r-0 border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand5} alt='' />
                </div>
                <div className='border-b md:hidden items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand6} alt='' />
                </div>
            </div>

            <div className='flex flex-wrap justify-center md:mt-0 bg-white'>
                <div className='border-r border-b  items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand7} alt='' />
                </div>
                <div className='md:border-r border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand8} alt='' />
                </div>
                <div className='border-r border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand9} alt='' />
                </div>
                <div className='md:border-r border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand10} alt='' />
                </div>
                <div className='border-r md:border-r-0 border-b items-center w-30'>
                    <img className='object-cover px-4 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand11} alt='' />
                </div>
                <div className='md:hidden items-center w-30'>
                    <img className='object-cover px-2 py-5 object-center flex-shrink-0 md:py-12 md:px-10' src={Brand12} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Brands