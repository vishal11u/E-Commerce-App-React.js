import React from "react";
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Special Offer on Gaming Accesaries
              </h1>
              <h3 className="mb-3 text-white text-lg">Flat 30% - 70% Off !</h3>
              <div className="h-1 w-60 bg-red-500 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 transition-all hover:translate-y-5">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-75 pb-3 rounded w-full object-cover object-center mb-6"
                  src="https://techyteam.co.uk/wp-content/uploads/2020/07/gaming-pc.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                  item-1
                </h3>
                <h2 className="text-lg text-white font-medium title-font ">
                  Gaming PC
                  <button className="ml-20 bg-indigo-600 text-white mt-3 px-3 py-1 hover:bg-slate-500 rounded-md  ">
                    <Link to='/product'>Buy now 🛒</Link>
                  </button>
                </h2>

              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 transition-all hover:translate-y-5">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-45 rounded w-full object-cover object-center mb-6"
                  src="https://images-na.ssl-images-amazon.com/images/I/610vKQoE71L.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                  item-2
                </h3>
                <h2 className="text-lg text-white font-medium title-font ">
                  Gaming Earbuds
                  <button className="ml-20 bg-indigo-600 text-white px-3 py-1 hover:bg-slate-500 rounded-md mt-3 ">
                  <Link to='/product'>Buy now 🛒</Link>
                  </button>
                </h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 transition-all hover:translate-y-5">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center mb-6"
                  src="https://sc01.alicdn.com/kf/H8293bb37ab824e2f89eb35551b31764fM.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                  item-3
                </h3>
                <h2 className="text-lg text-white font-medium title-font ">
                  Gaming CPU
                  <button className="ml-20 bg-indigo-600 text-white px-3 py-1 hover:bg-slate-500 rounded-md mt-3 ">
                  <Link to='/product'>Buy now 🛒</Link>
                  </button>
                </h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 transition-all hover:translate-y-5">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center mb-6"
                  src="https://i5.walmartimages.com/asr/8365c3df-3956-473c-be9e-72a8426ee901_1.b1d59b9a99d8f2c7a414e6a69c2d0438.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
                  alt="content"
                />
                <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                  item-4
                </h3>
                <h2 className="text-lg  text-white font-medium title-font ">
                  Gaming Chair
                  <button className="ml-20 bg-indigo-600 text-white px-3 py-1 hover:bg-slate-500 rounded-md mt-3 ">
                  <Link to='/product'>Buy now 🛒</Link>
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
    </>
  );
};

export default Card;
