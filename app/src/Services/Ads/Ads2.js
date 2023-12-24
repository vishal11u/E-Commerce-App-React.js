import React from 'react'
import Ads4 from '../../Assets/Background/ads-4.png'
import {Link} from 'react-router-dom'

const Ads2 = () => {
  return (
    <div className='py-2 md:py-5 bg-gray-200'>
            <div className='w-full px-1 md:px-44'>
                <Link to='/product'>
                <img className='h-[14vh] md:h-[30vh]' src={Ads4} alt='' />
                </Link>
            </div>
        </div>
  )
}

export default Ads2