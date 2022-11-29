import React, { useState } from 'react'
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { CgDarkMode } from 'react-icons/cg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='flex items-center pt-6 justify-between md:py-6 text-zinc-100 text-lg'>
            <div>
                <h1 className='font-bold text-2xl'>George's Portfolio</h1>
            </div>


            <div className='hidden md:flex gap-16'>
                <a href="#projects">Projects</a>
                <a href="#technologies">Technologoies</a>
                <a href="#about">About</a>
            </div>

            <div className='hidden md:flex gap-10'>
                <a href="https://github.com/Giga66?tab=repositories"><AiFillGithub size={20} className='cursor-pointer'/></a>
                <a href="mailto:gigamail326@gmail.com"><AiOutlineMail size={20} className='cursor-pointer' /></a>
                <a href="https://www.linkedin.com/in/george-gvasalia/"><AiFillLinkedin size={20} className='cursor-pointer'/></a>
                
            </div>


            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>

            {/* mobile menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-zinc-700'}>
                <a href="#projects" className='py-6'>Projects</a>
                <a href="#technologies" className='py-6'>Technologoies</a>
                <a href="#about" className='py-6'>About</a>
            </div>
        </div>

    )
}

export default Navbar