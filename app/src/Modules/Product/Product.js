import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Ads2 from '../../Services/Ads/Ads2'
import Sport from '../../Store/Sport/Sport';
import Fashion from '../../Store/Fashion/Fashion';
import Ads3 from '../../Services/Ads/Ads3';
import TopDeals from '../../Store/TopDeals/TopDeals';

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProduct(data)
    }
    fetchProduct()
  }, []);

  // const filterProduct =(cat)=>{
  //   const updateList = data.filter((x)=>x.category === cat)
  //   setfilter(updateList)
  // }

  // Conditional rendering for "Loading..."
  if (Object.keys(product).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pb-9'>
      <div className='text-center w-full bg-green-100'>
        <h1 className=' text-5xl py-6 shadow-lg'>All Products</h1>
      </div>

      <div className='md:flex justify-center  w-full md:gap-9 pt-6 md:py-6'>
        <button className='border-2  hidden md:block  md:px-4 py-2 rounded hover:bg-gray-200 text-black' type='button'>All</button>
        <button className='border-2 ml-1 px-2 md:px-4 py-2 rounded hover:bg-gray-200 text-black' type='button'>Men's</button>
        <button className='border-2 ml-1 px-2 md:px-4 py-2 rounded hover:bg-gray-200 text-black' type='button'>Women's</button>
        <button className='border-2 ml-1 px-2 md:px-4 py-2 rounded hover:bg-gray-200 text-black' type='button'>Electronics</button>
        <button className='border-2 ml-1 px-2 md:px-4 py-2 rounded hover:bg-gray-200 text-black' type='button'>Jewelery</button>
      </div>

      <section className="text-gray-600 body-font ">
        <div className="container px-10 md:px-32 pt-16 pb-3 md:py-12  mx-auto ">

          <div className="flex flex-wrap -m-4">
            {product.map((product) => {
              console.log(product, "product");
              const { id, title, price, category, image } = product;

              return (
                <div className="lg:w-1/4 md:w-1/2 p-4  w-full border rounded-lg mb-5 transition-all hover:bg-gray-100 ">
                  <p className="bg-indigo-600 text-white w-8 rounded-full text-center object-center"> {id} </p>
                  <a href="##" className="block relative h-48 rounded overflow-hidden">
                    <img alt={title} className=" object-contain  object-center w-full h-full block transition-all hover:bg-slate-100" src={image} /> </a>

                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">  {category} </h3>
                    <h2 className="text-gray-900 title-font text-xl font-bold ">  {title} </h2>
                    <p className="mt-1 text-gray-500 pb-1 text-md font-semibold ">  $ {price} </p>
                    <Link to={`/cart/${id}`} className="py-1 bg-yellow-400 text-black px-3 rounded hover:bg-slate-500 ">  Add to Cart </Link>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />

      <TopDeals/>
      <Ads3/>
      <Sport/>
      <Fashion/>
      <Ads2 />
    </div>
  )
}

export default Product