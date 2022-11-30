import React from 'react'
import BackgroundAnimation from '../styles/BgAnimation'

const Header = () => {
  return (
    <div className='text-center mt-10 text-zinc-100 lg:text-zinc-100 md:mt-20 lg:text-left bg-[]'>
      <div className=' lg:grid grid-cols-2'>
        <h1 className='text-6xl font-bold mb-12 '>Welcome To<br /> My Personal Portfolio</h1>
          <BackgroundAnimation />
      </div>
      <p className='text-gray-300 mx-20 lg:max-w-4xl text-2xl lg:ml-0 z-1'>Hi there! My name is George. A Graduate of a Full Stack Development course at Netcraft Academy. A Passionate web developer with solid programming skills.</p>

      <a href="https://drive.google.com/file/d/1RXJkkz52gH3ByEEk45rXM9kGBZMfV3K8/view?usp=sharing" target='_blank' rel="noreferrer"><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-2 mt-14 z-10">View Resume Online</button></a>


      <div className="m-auto lg:ml-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg py-1 mt-6 max-w-xs "></div>
    </div>
  )
}

export default Header