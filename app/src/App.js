import React from 'react'
import NavBar from './Component/Navbar/NavBar'
import Home from './Modules/Home/Home'
import Footer from './Component/Footer/Footer'
import Topbar from './Component/TopBar/Topbar'
import MenuBar from './Component/MenuBar/MenuBar'
import { Routes, Route } from 'react-router-dom'
import Product from './Modules/Product/Product'
import Cart from './Modules/Cart/Cart'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Blog from './Modules/Blog/Blog'
import Track from './Services/TrackOrder/Track'
import ShopppingCart from './Modules/ShopingCart/ShoppingCart'
import Discount from './Services/Discount/Discount'
import ApplicationForm from './Component/LoginForm/ApplicationForm'
import Login from './Login/Login'
import SignUp from './Login/SignUp/SignUp'
import Error from './Services/Error404/Error'
import Profile from './AdminDashboard/Profile/Profile'
import Reset from './Login/ForgotPassword/Reset'
import Payment from './Login/Payment/Payment'

function App() {
  return (
    <div>
      <Topbar />
      <NavBar />
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/track' element={<Track />} />
        <Route path='/shopping' element={<ShopppingCart />} />
        <Route path='/form' element={<ApplicationForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<SignUp />} />
        <Route path='/404' element={<Error />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      <Discount />
      <Footer />
    </div>
  )
}




export default App