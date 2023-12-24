import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiRightArrowCircle, BiSolidDownArrowCircle } from 'react-icons/bi'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Select from './Select/Select';
import Select2 from './Select/Select2';
import Select3 from './Select/Select3';

const MenuBar = () => {
    

    return (
        <div className='hidden md:flex md:justify-around h-16 bg-yellow-400 items-center shadow'>
            <div className='hidden md:flex md:justify-evenly gap-5 '>

                <div className=' mt-2 gap-2'>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button className='gap-4' sx={{ backgroundColor: "black", paddingBottom: "10px", textAlign: "center" }} variant="contained" {...bindTrigger(popupState)}>
                                    <RiMenu2Line size={20} /> All Categories <BiSolidDownArrowCircle size={20} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Mobile & Laptops</Link></MenuItem>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Gaming Entertainment</Link></MenuItem>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Image & Video</Link></MenuItem>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Furnitures</Link></MenuItem>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Sport</Link></MenuItem>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Food & Drinks</Link></MenuItem>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Fashion Accessories</Link></MenuItem>
                                    <MenuItem onClick={popupState.close}><Link to='/product'>Makeup Corner</Link></MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                </div>

                <div className='flex items-center'>
                    <Select/>
                    <Select2/>
                    <Select3/>
                </div>

                <div className='py-3 items-center'>
                    <Link to='/about' className='px-4 '>About</Link>
                    <Link to='/blog' className='px-4'>Blog</Link>
                    <Link to='/contact' className='px-4 '>Contact</Link>
                </div>

            </div>

            <div className=''>
                <Link to='/form' className='px-4 py-2 bg-black text-white text-base flex gap-3 transition-all hover:bg-gray-500' type='button' >Become Seller <BiRightArrowCircle size={25} /></Link>
            </div>
        </div>
    )
}

export default MenuBar;