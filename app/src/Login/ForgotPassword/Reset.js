import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Reset = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='md:py-10 pb-5 md:flex justify-center '>
            <div className=' md:block'>
                <img className='md:h-[68vh]' src='https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-4652.jpg?size=626&ext=jpg&uid=R123874945&ga=GA1.1.241201418.1699171553&semt=ais' alt='' /><hr/>
            </div>

            <div className='  px-3 md:px-5 py-2 shadow-lg border rounded-md text-center'>
                <div className='px-5 py-3 text-center text-xl md:text-4xl '>
                    <h1><span className='text-yellow-400 md:text-6xl mr-3 text-4xl' >Forgot</span>Password</h1><hr />
                </div>

                <div className="md:col-span-5">
                    <FormControl sx={{ m: 1, width: "32ch" }} variant="outlined">
                        Enter Code*
                        <OutlinedInput id="outlined-adornment-password" type={showPassword ? "text" : "password"} endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>} />
                    </FormControl>
                </div>

                <div className="md:col-span-5  ">
                    <FormControl sx={{ m: 1, width: "32ch" }} variant="outlined">
                        New Password*
                        <OutlinedInput id="outlined-adornment-password" type={showPassword ? "text" : "password"} endAdornment={
                            <InputAdornment position="end" >
                                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>} />
                    </FormControl>
                </div>

                <div className="md:col-span-5  ">
                    <FormControl sx={{ m: 1, width: "32ch" }} variant="outlined">
                        Confirm Password*
                        <OutlinedInput id="outlined-adornment-password" type={showPassword ? "text" : "password"} endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} placeholder='🔐••••••' >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>} />
                    </FormControl>
                </div>

                <div className=' mt-2  items-center'>
                    <div className=''>
                        <input className='md:mr-2 mr-1' type='checkbox' />
                        <label for="full_name">I accept the Terms and Conditions.</label>
                    </div>
                </div>

                <div className='mt-4 text-center'>
                    <Link to='/' className='text-white px-12 bg-black md:px-28 py-3' type='button'>Reset Password</Link>
                </div>
            </div>
        </div>
    )
}

export default Reset