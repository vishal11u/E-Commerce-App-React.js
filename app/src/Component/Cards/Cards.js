import React from 'react'
import {Link} from 'react-router-dom'

const Cards = () => {
    return (
        <div>
            <section className="text-gray-400 body-font bg-gray-900">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap w-full mb-8">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-white">
                                Special Discount on below Products (30% to 50%)
                            </h1>
                            <div className="h-1 w-20 bg-purple-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <Link to='/product' className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                <img
                                    className="h-90 rounded w-full object-cover object-center mb-6"
                                    src="https://www.timeslifestyle.net/wp-content/uploads/2020/09/best-fitness-products-amazon-1170x1170.jpg"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-purple-400 text-xs font-medium title-font">
                                    Product-1
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font">
                                    Fitness
                                </h2>
                            </div>
                        </Link>
                        <Link to='/product' className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                <img
                                    className="h-100 rounded w-full object-cover object-center mb-6"
                                    src="https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-purple-400 text-xs font-medium title-font">
                                    Product-2
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font ">
                                    Smart Watch
                                </h2>
                            </div>
                        </Link>
                        <Link to='/product' className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                <img
                                    className="h-100 rounded w-full object-cover object-center mb-6"
                                    src="https://i5.walmartimages.com/asr/63507731-2a6f-48ca-96ed-86d2bcaf3bd1_1.b6ccbac36b01ab18bfbbe216e3655a32.jpeg"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-purple-400 text-xs font-medium title-font">
                                    Product-3
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font ">
                                    Kid's
                                </h2>
                            </div>
                        </Link>
                        <Link to='/product' className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                                <img
                                    className="h-100 rounded w-full object-cover object-center mb-6"
                                    src="https://5.imimg.com/data5/SELLER/Default/2022/8/IC/YI/SJ/97262289/zebronics-zeb-ac32fhd-curved-slim-gaming-led-monitor-with-32inch-80-cm-wide-screen-1000x1000.jpg"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-purple-400 text-xs font-medium title-font">
                                    Product-4
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font ">
                                    Gaming Monitor
                                </h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </section><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
        </div>
    )
}

export default Cards