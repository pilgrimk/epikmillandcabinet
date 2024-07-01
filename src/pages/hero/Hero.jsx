import React from 'react'
import { Services } from '../../components'
import { data } from '../../constants'

const Hero = () => {
  return (
    <div id='hero' className='w-full flex flex-col'>
      <div className='bg-hero-bg bg-no-repeat bg-cover bg-center w-full h-[350px] md:h-[650px]'>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl md:text-5xl text-white font-outline-1 font-serif text-center">
            {data.heroSection.title}
          </h1>
          <p className="text-xl md:text-2xl text-white font-outline-1 font-sans text-center">
            {data.heroSection.subtitle}
          </p>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Hero