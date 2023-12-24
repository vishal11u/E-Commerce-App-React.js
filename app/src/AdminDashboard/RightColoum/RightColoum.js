import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'

const RightColoum = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default RightColoum