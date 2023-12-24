import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { BiSearchAlt2, BiLogoInstagramAlt } from 'react-icons/bi'
import { HiShoppingBag } from 'react-icons/hi2'
import { MdFavorite } from 'react-icons/md'
import { IoReloadCircleSharp } from 'react-icons/io5'
import { BsFacebook } from 'react-icons/bs'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { GiIndianPalace } from 'react-icons/gi'
import { FaSquareTwitter } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io5'


const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const [nav, setNav] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const hamburger = () => {
    setNav(!nav)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='flex justify-around shadow-lg  items-center h-16 md:h-20 md:justify-around sticky top-0 left-0 z-50 bg-gray-800'>

      {/* Responsive Navbar ------------------------------------------------------------------------------ */}
      <button className='md:hidden text-yellow-400 ' onClick={hamburger} ><Hamburger toggled={isOpen} toggle={setOpen} size={25} /></button>

      <ul className={nav ? 'fixed h-full w-[80%] top-[8%] left-0 duration-500 shadow-lg bg-gray-800 ease-in-out text-center text-white ' : 'duration-300 bg-gray-800  h-full ease-in-out top-[9.5%] fixed left-[-100%]'}>

        <li className='flex gap-2 mt-1 pb-2 px-2'>
          <div className='flex gap-1'>
            <p className='px-1 py-1 rounded-full bg-yellow-400'><GiIndianPalace size={20} /></p>
            <select className=' cursor-pointer text-sm bg-gray-800'>
              <option>India</option>
              <option>United State</option>
              <option>Russia</option>
            </select>
          </div>

          <select className=' cursor-pointer text-sm bg-gray-800'>
            <option>INR</option>
            <option>USD</option>
            <option>RDR</option>
          </select>

          <select className=' cursor-pointer text-sm bg-gray-800'>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>
        </li>

        <li className='border rounded-xl mt-4 flex items-center py-1 w-[285px] ml-2' >
          <input className='outline-none py-1 bg-transparent text-lg pl-1' type='text' placeholder='Search...' />
          <button type='button' className='px-3 py-2 hidden mr-3 bg-yellow-400 rounded-xl text-black'><BiSearchAlt2 size={25} /></button>
        </li>

        <li className='pt-6'><Link to='/product'>Mens</Link></li>
        <li className='pt-4'><Link to='/product'>Womens</Link></li>
        <li className='pt-4'><Link to='/product'>Sports</Link></li>
        <li className='pt-4'><Link to='/product'>Kids</Link></li>
        <li className='pt-4'><Link to='/product'>Mibiles</Link></li>
        <li className='pt-4'><Link to='/product'>Electronics</Link></li>
        <li className='py-4'><Link to='/product'>Grossary</Link></li><hr />

        <div className='flex py-2 justify-evenly'>
          <Link className='px-3 py-3 hover:bg-gray-400' to='/about'>About</Link>
          <Link className='px-3 py-3 hover:bg-gray-400' to='/blog'>Blog</Link>
          <Link className='px-3 py-3 hover:bg-gray-400' to='/contact'>Contact</Link>
        </div><hr />

        <div className='flex justify-evenly pt-5 text-yellow-400'>
          <Link to='/track' href="##">Track Order</Link>
          <Link to='/contact' href="##">Support</Link>
        </div>

        <div className='flex justify-center pt-3 gap-4 items-center '>
          <li><Link to={""}><BsFacebook size={26} /></Link></li>
          <li className='py-1'><Link to={""}><BiLogoInstagramAlt size={32} /></Link></li>
          <li><Link to={""}><FaSquareTwitter size={27} /></Link></li>
          <li><Link to={""}><IoLogoYoutube size={30} /></Link></li>
        </div>

        <div className='pt-2 text-xs'>
          ©2023 All rights reserved :- V-Store
        </div>
      </ul>

      {/* Desktop Navbar -------------------------------------------------------------------------------------------------------- */}
      <div className='flex items-center'>
        <img className='h-9 md:h-10 cursor-pointer' src='https://clipartcraft.com/images/v-logo-transparent-7.png' alt='' />
        <h1 className='hidden text-white md:text-xl md:flex'>-Store</h1>
      </div>

      {/* ------------------------------------------------------------------------------------------------ */}
      <div className=' hidden md:flex justify-between  border pl-2  rounded-xl md:rounded transition  w-[220px] hover:outline outline-offset-1 outline-white md:w-[400px]'>
        <input className=' md:text-lg pl-1  text-white bg-transparent outline-none md:w-[300px] ' type='text' placeholder='Search...' />
        <button type='button' className='px-3 py-2 bg-yellow-400 text-black'><BiSearchAlt2 size={30} /></button>
      </div>

      {/* ------------------------------------------------------------------------------------------------ */}
      <div className='flex gap-3 md:gap-6 items-center text-white  transition-all'>
        <Link className=' hover:text-yellow-400' to={""}><IoReloadCircleSharp size={30} /></Link>
        <Link className='hidden md:block hover:text-yellow-400' to='/contact'><MdFavorite size={28} /></Link>
        <Link className=' hover:text-yellow-400' to='/shopping'><HiShoppingBag size={28} /></Link>

        <React.Fragment>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <Avatar src='https://cdn.pixabay.com/photo/2015/05/03/14/40/woman-751236_640.jpg' sx={{ width: 40, height: 40 }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  src: "",
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
            <MenuItem onClick={handleClose}>
              <Avatar /><Link to='/profile'>Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /><Link to='/profile'> My account</Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
            <Link to='/sign'>Add another account</Link>  
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>

      </div>
    </div>
  )
}

export default NavBar