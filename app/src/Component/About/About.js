import React from 'react'
import Review from '../Customer/Review'
import AboutImg from '../../Assets/Background/about-banner.png'
import { Link } from 'react-router-dom'
import News from '../News/News'
import Services from '../../Services/Services'

const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={AboutImg} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is e-commerce business?
                        </h1>
                        <p className="mb-8 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.
                            <ul className='pt-5'>
                                <li>* slim body with metal cover</li>
                                <li>* latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                <li>* 8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                <li>* NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                            </ul>
                        </p>
                        <div className="flex justify-center">
                            <Link to='/contact'>
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            </section>
            <Services />
            <Review />
            <News />
        </div>
    )
}

export default About