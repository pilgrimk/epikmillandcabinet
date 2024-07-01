import React from 'react'
import { Header, Card } from '../../components'
import { data } from '../../constants'
import shortid from 'shortid'

const AboutUs = () => {
  return (
    <div id='about-us' 
    className='w-full flex flex-col justify-center items-center'>
      <Header title={data.aboutUs.title} />
      <div className='container max-w-5xl p-4'>
        <div className='grid place-items-center'>
          {data.aboutUs.infoObjs.map((info) => (
            <div
              className='w-100'
              key={shortid.generate()}>
              <Card infoItem={info} />
            </div>
          ))}
        </div>
      </div>      
    </div>
  )
}

export default AboutUs