import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
const Score = () => {
  return (
    <div className='bg-white'>
      
      <div>
        <Nav/>
      </div>

      <div className="flex mt-16">

      <Link
        to={"/Cricketstats"}
        className="ml-20 cursor-pointer hover:text-blue-500"
      >
        <div style={{height:"400px" , width:"300px"}} className="flex flex-col justify-between items-center shadow-2xl">
        <img src="https://i.pinimg.com/474x/f0/1d/0f/f01d0fb998ede3b3319cb8e4827078e6.jpg" alt=""  style={{height:"350px" , width:"300px"}} srcset="" />
        <h1 className="text-2xl font-bold mb-3 text-black">CRICKET STATS</h1>
        </div>
      </Link>

      <Link
        to={"/Footballstats"}
        className="ml-20 cursor-pointer hover:text-blue-500"
      >
         <div style={{height:"400px" , width:"300px"}} className="flex flex-col justify-between items-center shadow-2xl">
        <img src="https://i.pinimg.com/236x/c1/e3/2d/c1e32d03ce8126a26361d7375f19bfe5.jpg" alt="" style={{height:"350px" , width:"300px"}} srcset="" />
        <h1 className="text-2xl font-bold mb-3 text-black">FOOTBALL STATS</h1>
        </div>
      </Link>

      <Link
        to={"/"}
        className="ml-20 cursor-pointer hover:text-blue-500"
      >
         <div style={{height:"400px" , width:"300px"}} className="flex flex-col justify-between items-center shadow-2xl">
        <img src="https://i.pinimg.com/236x/90/9d/fa/909dfa37b41d65e3e59427226f605179.jpg" alt="" style={{height:"350px" , width:"300px"}} srcset="" />
        <h1 className="text-2xl font-bold mb-3 text-black">NBA STATS</h1>
        </div>
      </Link>


      </div>


    </div>
  )
}

export default Score
