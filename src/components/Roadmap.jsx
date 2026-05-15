import React from 'react'
import Section from './Section'
import Heading from './Heading'
import TagLine from './TagLine'
import { roadmap } from '../constants'
import { check2, grid, loading1 } from '../assets'


const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">

        <div className='container -translate-y-5 md:pb-10'>
            <Heading
                tag="Ready to get started"
                title="What we're working on"/>
            
            <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
                {roadmap.map(
                    (item) => {
                        const status = item.status === 'done' ? 'Done' : 'In progress';
                    
                        return (
                            <div 
                                key={item.id}
                                className={`
                                    md:flex
                                    even:md:translate-y-[7rem]
                                    p-0.25 rounded-[2.5rem]
                                    ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}
                                `}
                            >
                                <div
                                    className='relative p-8 bg-n-8 rounded-[2rem]
                                      overflow-hidden xl:p-30'>
                                    <div
                                        className='absolute top-0 left-0 max-w-full'> 
                                        <img
                                            src={grid}
                                            className='w-full'
                                            width={550}
                                            height={550}
                                            alt='Grid'
                                        />
                                    </div>
                                    <div className='relative z-1'>
                                        <div className='flex-col justify-between
                                            max-w-[27rem] mb-8 md:mb-20'>
                                            
                                            <div className='flex justify-between md:-my-10'>
                                                <TagLine>
                                                    {item.date}
                                                </TagLine>

                                                <div className='flex items-center px-4 py-1 bg-n-1 rounded text-n-8'>
                                                    <img 
                                                        src={item.status === 'done' ? check2 : loading1}
                                                        className="mr-2.5"
                                                        width={16}
                                                        height={16}
                                                        alt={status}
                                                    />
                                                    <div className="tagline"> 
                                                        {status} 
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-15 my-10">
                                                <img 
                                                    src={item.imageUrl}
                                                    className="w-full h-full translate-y-15"
                                                    width={630}
                                                    height={420}
                                                    alt={item.title}
                                                />
                                            </div>
                                            
                                            <div className='xl:translate-y-30 xl:-translate-x-20'>
                                                <h4 className="h4 mb-4">{item.title}</h4>
                                                <p className = "body-4 text-n-4">{item.text}</p>                                                
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}

            </div>



        </div>
        
        
    </Section>
  )
}

export default Roadmap