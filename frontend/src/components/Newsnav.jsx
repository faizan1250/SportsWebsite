"use client"
import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Newsnav = () => {
  return (
    <><h1 className='text-white flex items-center justify-center mt-8 text-5xl font-semibold'>Latest Updates</h1>
   

<nav className='flex list-none ml-14 mt-10 border p-2 rounded-xl' style={{width:"35vw"}}>
  <NavLink 
    to={'/News'} 
    className={({ isActive }) => isActive ? ' text-white ml-16 text-2xl font-semibold underline ' : 'ml-16 text-2xl font-semibold'}
  >
    <li>ALL</li>
  </NavLink>
  <NavLink 
    to={'/Cricketnews'} 
    className={({ isActive }) => isActive ? ' text-white ml-16 text-2xl font-semibold underline' : 'ml-16 text-2xl font-semibold'}
  >
    <li>CRICKET</li>
  </NavLink>
  <NavLink 
    to={'/Footballnews'} 
    className={({ isActive }) => isActive ? ' text-white ml-16 text-2xl font-semibold underline' : 'ml-16 text-2xl font-semibold'}
  >
    <li>FOOTBALL</li>
  </NavLink>
  <NavLink 
    to={'/Tennisnews'} 
    className={({ isActive }) => isActive ? ' text-white ml-16 text-2xl font-semibold underline' : 'ml-16 text-2xl font-semibold'}
  >
    <li>TENNIS</li>
  </NavLink>
</nav>
</>

  )
}

export default Newsnav
