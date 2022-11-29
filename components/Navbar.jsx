import React, { useState } from 'react'
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


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


        </div>
    )
}

export default Navbar