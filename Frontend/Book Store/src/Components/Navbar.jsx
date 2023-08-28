import React from 'react'
import { GiGoldMine } from "react-icons/gi"
import { Link } from "react-router-dom"
import { BiSolidCart } from "react-icons/bi"

const Navbar = () => {
  return (
    <div>
        <div className='bg-yellow-500 '>
            <div className='max-w-[90%] mx-auto'>
                <div className='flex gap-6 pt-4 justify-end items-center'>
                    <button><BiSolidCart className='text-2xl'/></button>
                    <button className='py-2 px-3 rounded-full '>Add Book</button>
                    <button className='bg-teal-700 py-2 px-3 rounded-full text-white'>Sign-In</button>
                </div>
                <div className='flex-col text-center p-10'>
                    <GiGoldMine className='text-5xl mx-auto'/>
                    <h1 className='pt-3 text-3xl'>GoldMine Book Stores</h1>
                </div>
                <div>
                    <ul className='flex justify-between p-5 bg-teal-700 text-white uppercase'>
                        <li>Home</li>
                        <li>Fiction</li>
                        <li>Non-Fiction</li>
                        <li>Sci-fi</li>
                        <li>Children</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar