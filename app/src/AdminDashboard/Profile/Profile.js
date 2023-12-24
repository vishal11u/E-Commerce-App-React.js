import React from 'react'
import Navbar from '../NavBar/Navbar'
import RightColoum from '../RightColoum/RightColoum'
import { Routes, Route } from 'react-router-dom'

const Profile = () => {
    return (
        <div className='flex gap-9 md:px-48 mt-5 py-3 border  '>
            <Navbar />

            <div className='border'></div>
            <div>
                <Routes>
                    <Route path='*' element={<RightColoum />} />
                </Routes>
            </div>
        </div>
    )
}

export default Profile