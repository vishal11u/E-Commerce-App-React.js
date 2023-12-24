import React from 'react'
import { Link } from 'react-router-dom'

const Track = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container pl-5 md:px-48 py-8 mx-auto  flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-[39vw] md:w-[40vw] w-[85vw] h-[30vh] md:h-[51vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <img className="absolute inset-0"  src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-[80vw] md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Track Order</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Enter your order taracking number and your secreet id.</p>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Order Tracking Number*</label>
                            <input type="text" id="OrderNumber" name="OrderNumber" placeholder='Order Number' className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Delivery Date</label>
                            <input type="date" id="date" name="date" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <Link to='/' className="text-white text-center bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track