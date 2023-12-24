import React from 'react'
import Ads6 from '../../Assets/Background/ads-6.png'
import {Link} from 'react-router-dom'

const Ads3 = () => {
  return (
    <div>
        <div className='py-2 md:py-5 bg-gray-200'>
            <div className='w-full px-1 md:px-44'>
                <Link to='/product'>
                <img className='h-[14vh] md:h-[30vh]' src={Ads6} alt='' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Ads3