import React, { useEffect, useState } from 'react'
import Hero from '../../Component/Hero/Hero'
import Products from '../../Component/Products/Products'
import Sales from '../../Component/Sales/Sales'
import Brands from '../../Component/Brands/Brands'
import Services from '../../Services/Services'
import BrandSale from '../../Services/BrandSale'
import Card from '../../Component/Cards/Card'
import Cards from '../../Component/Cards/Cards'
import Ads from '../../Services/Ads/Ads'
import Mobile from '../../Store/Mobile/Mobile'
import Logo from '../../Component/LogoCloud/Logo'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Cards />
      <Ads/>
      
      <div className='flex flex-col text-center w-full py-6 md:py-10 bg-green-100'>
        <h2 className='text-2xl font-semibold text-indigo-500 tracking-widest tittle-font mb-1'>Products</h2>
        <h1 className='sm:text-3xl text-2xl font-medium titte-font text-gray-900 '>Most Popular products</h1>
      </div>
      {
        products.length > 0 ?
          <Products products={products} />
          :
          <div>Loading.......</div>
      }
      <Products />
      <Brands />
      <Card />
      <Mobile/>
      <Logo/>
      <BrandSale />
      <Sales />
   
    </div>
  )
}

export default Home