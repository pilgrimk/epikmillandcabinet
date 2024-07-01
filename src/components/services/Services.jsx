import React from 'react'
import * as Scroll from 'react-scroll'
import { data } from '../../constants'
import shortid from 'shortid'

const Services = () => {
  const scroller = Scroll.scroller;

  const scrollToAnchor = (anchor) => {
    scroller.scrollTo(anchor, {
      duration: 500,
      smooth: true,
      exact: true
    });
  };

  return (
    <div className='w-full my-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl p-4'>{data.servicesOffered.headline}</p>
          {data.servicesOffered.description.map((desc) => (
            <p key={shortid.generate()} className='p-4'>{desc}</p>
          ))}
          <ul className='list-disc mx-8 p-4'>
            {data.servicesOffered.services.map((svc) => (
              <li key={shortid.generate()}>
                <span>{svc.service}</span>
                <p className='font-thin italic'>{svc.desc}</p>
              </li>
            ))}
          </ul>
          <p className='p-4'>{data.servicesOffered.call_to_action}</p>
          <button
            className='bg-accent-dark-500 hover:bg-accent-dark-300 text-white font-bold py-2 px-4 rounded mb-4'
            onClick={() => scrollToAnchor('gallery')}>

            {data.servicesOffered.button_label}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services