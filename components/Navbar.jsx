import React, { useState } from 'react'
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleClick = () => {
        setNav(!nav)
    }


    return (
        <div className='flex items-center justify-between text-zinc-100 text-lg'>
            <div>
                <img src="/images/Mokoto (1).png" alt="/" />
            </div>


            <div className='hidden md:flex gap-16'>
                <a href="#projects">Projects</a>
                <a href="#technologies">Technologoies</a>
                <a href="#about">About</a>
            </div>

            <div className='hidden md:flex gap-10 pb-4 '>
                <a href="https://github.com/Giga66?tab=repositories"><AiFillGithub size={20} className='cursor-pointer' /></a>
                <a href="mailto:gigamail326@gmail.com"><AiOutlineMail size={20} className='cursor-pointer' /></a>
                <a href="https://www.linkedin.com/in/george-gvasalia/"><AiFillLinkedin size={20} className='cursor-pointer' /></a>
            </div>
            {/* 'absolute top-20 right-0 gap-8 p-12 bg-black rounded-lg' */}

            {/* mobile menu */}
                <AiOutlineMenu size={35} onClick={handleClick} className='absolute top-15 right-3 md:hidden'/>
            <div className={!nav ? 'absolute top-20 right-0 gap-8 p-12 bg-black rounded-lg ' : 'hidden'}>
                <div className='flex flex-col gap-12 text-center'>
                    <a href="#projects">Projects</a>
                    <a href="#technologies">Technologoies</a>
                    <a href="#about">About</a>

                    <div className='flex gap-14'>
                        <a href="https://github.com/Giga66?tab=repositories"><AiFillGithub size={20} className='cursor-pointer' /></a>
                        <a href="mailto:gigamail326@gmail.com"><AiOutlineMail size={20} className='cursor-pointer' /></a>
                        <a href="https://www.linkedin.com/in/george-gvasalia/"><AiFillLinkedin size={20} className='cursor-pointer' /></a>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Navbar