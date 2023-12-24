import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-full '>
      <div className=' items-center md:px-96 text-center'>
        <img className=' ' src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt=''/>
        <h1 className=' text-xl md:text-4xl'>Sorry! We cant’t Find that page!</h1>
      </div>
      <div className='text-center pt-5'>
        <Link to='/' className='px-16 py-3 bg-black text-white' type='button'>Back to Shop</Link>
      </div>
    </div>
  )
}

export default Error