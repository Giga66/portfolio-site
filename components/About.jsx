import React from 'react'

const About = () => {
    return (
        <div id='about'>
            <div className=' lg:flex lg:items-center gap-16'>
                <div>
                    <div className="m-auto lg:ml-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg py-1 mt-6 max-w-xs"></div>
                    <h1 className=' text-center lg:text-left text-4xl mb-0 md:text-6xl font-bold md:mb-12 text-zinc-300 mt-6'>About Me</h1>

                    <p className='text-center my-4 text-zinc-300 text-2xl max-w-2xl lg:text-left'>I'm a highly motivated and passionate web developer. My interest revolves around programming and technology. In Netcraft Academy I learned how to develop Front and Back end applications through "hands on" approach. </p>

                    <p className='text-center my-4 text-zinc-300 text-2xl max-w-2xl lg:text-left'>I'm after my grduation, and I continue to learn more and deepen my knowledge and skills every day. I love working with the latest technoloiges and to know how they work at the core. I love solving problems and being productive - <span className='font-bold text-sky-400'>a "can do" attitude!</span>
                    </p>
                </div>
                <img src="images/edited.png" alt="/" className='m-auto my-4 h-56 rounded-lg lg:mt-48' />
            </div>
        </div>
    )
}

export default About