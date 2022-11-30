import React from 'react'
import { projects } from '../constants'
import Image from 'next/image'

const Projects = () => {
    return (
        <div id='projects' className='z-100'>
            <h1 className=' text-center lg:text-left text-4xl md:text-6xl font-bold text-zinc-300 mt-6'>Projects</h1>
            <div className='  md:mt-12 text-left md:grid grid-cols-2'>
                {projects.map(({ id, image, title, description, tags, source, visit }) => {
                    return (
                            <div className='z-100 m-auto my-10 md:inline-block max-w-sm md:m-12 text-zinc-300 bg-inherit rounded-md shadow-lg shadow-indigo-300/50 pb-8 ' key={id}>
                                <div key={id} className='z-100'>
                                    <Image src={image} alt="" className='w-[500px] rounded-md z-100' height={325} width={525}/>
                                    <h1 className='pt-4 text-4xl font-bold text-center text-cyan-300'>{title}</h1>
                                    <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg py-1 m-auto my-4 max-w-[64px] "></div>
                                    <p className='p-2 text-center'>{description}</p>
                                    <p className='text-center font-semibold'>Stack</p>
                                    <div className='flex gap-8 justify-center mt-4 font-semibold'>
                                        {tags.map((tag, i) => {
                                            return <h4 key={i} >{tag}</h4>
                                        })}
                                    </div>
                                    <div className='flex justify-around items-center mt-6 font-bold'>
                                        <a href={source} className='rounded-md bg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br p-2'>Source</a>
                                        <a href={visit} className='rounded-md bg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br p-2'>Visit</a>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects