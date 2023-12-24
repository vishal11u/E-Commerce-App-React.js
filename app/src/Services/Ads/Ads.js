import React from 'react'
import Ads1 from '../../Assets/Background/ads-3.png'
import {Link} from 'react-router-dom'

const Ads = () => {
    return (
        <div className='py-2 md:pb-8  bg-gray-200'>
            <div className='w-full px-1 md:px-44'>
                <Link to='/product'>
                <img className='h-[14vh] md:h-[40vh]' src={Ads1} alt='' />
                </Link>
            </div>
        </div>
    )
}

export default Ads