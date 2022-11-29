import React from 'react'
import { stack } from '../constants'

const Technologies = () => {
    return (
        <div id='technologies'>
            <div>
                <div className="m-auto lg:ml-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg py-1 mt-6 max-w-xs "></div>
                <h1 className=' text-center lg:text-left text-4xl mb-0 md:text-6xl font-bold md:mb-12 text-zinc-300 mt-6'>Technologies</h1>
                
                <h4 className='text-center my-4 text-zinc-300 text-2xl max-w-2xl lg:text-left'>I've worked with a range of technologies in the web development world. From Back-end to Front-end</h4>

                <div className='grid grid-cols-2 lg:grid lg:grid-cols-4 gap-6 '>
                    {stack.map((item, i) => {
                        return (
                            <div className='bg-inherit rounded-md shadow-lg shadow-gray-600 text-zinc-300 font-medium my-10 hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 '>
                                <div className='flex items-center ' key={i}>
                                    <img src={item.img} className='h-16 ' />
                                    <h1 className='pl-2 '>{item.title}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Technologies