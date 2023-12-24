import React from 'react'
import saller from '../Assets/Logo/saller-1.png'
import saller1 from '../Assets/Logo/saller-2.png'
import saller2 from '../Assets/Logo/saller-3.png'
import saller3 from '../Assets/Logo/saller-4.png'
import saller4 from '../Assets/Logo/saller-5.png'
import saller5 from '../Assets/Logo/saller-6.png'

const BestSales = () => {
    return (
        <>
            <div className='pt-5 text-4xl px-5 md:px-16 font-semibold md:bg-gray-200'>
                <h1>Best Saller</h1>
            </div>
            <div className='md:py-8 py-6 w-full flex justify-evenly flex-wrap md:bg-gray-200'>
                <div className='text-center'>
                    <div className='md:bg-white md:py-8 md:px-10  rounded-full md:w-[12vw] '>
                        <img className='md:h-[15vh] ' src={saller} alt='' />
                    </div>
                    <h1 className='pt-1 md:text-xl'>Shopno BD</h1>
                </div>

                <div className='text-center pt-6 md:pt-0'>
                    <div className='md:bg-white md:py-8 md:px-10  rounded-full md:w-[12vw] '>
                        <img className='md:h-[15vh] ' src={saller1} alt='' />
                    </div>
                    <h1 className='pt-1 md:text-xl'>Eecoms Shop</h1>
                </div>

                <div className='text-center pt-3 md:pt-0'>
                    <div className='md:bg-white md:py-8 md:px-10  rounded-full md:w-[12vw] '>
                        <img className='md:h-[15vh] ' src={saller2} alt='' />
                    </div>
                    <h1 className='pt-1 md:text-xl'>Fusion X</h1>
                </div>

                <div className='pt-6  md:pt-0 text-center '>
                    <div className='md:bg-white md:py-8 md:px-11  rounded-full md:w-[12vw] '>
                        <img className='md:h-[15vh] ' src={saller3} alt='' />
                    </div>
                    <h1 className='pt-1 md:text-xl'>Rikayi Rox</h1>
                </div>

                <div className='pt-5 md:pt-0 text-center'>
                    <div className='md:bg-white md:py-8 md:px-10  rounded-full md:w-[12vw] '>
                        <img className='md:h-[15vh] ' src={saller4} alt='' />
                    </div>
                    <h1 className='pt-1 md:text-xl'>Habbriyi</h1>
                </div>

                <div className='pt-5 md:pt-0 text-center'>
                    <div className='md:bg-white md:py-8 md:px-10  rounded-full md:w-[12vw] '>
                        <img className='md:h-[15vh] ' src={saller5} alt='' />
                    </div>
                    <h1 className='pt-1 md:text-xl md:pt-2'>Rayhans</h1>
                </div>
            </div><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
        </>

    )
}

export default BestSales