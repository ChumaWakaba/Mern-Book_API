import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Root