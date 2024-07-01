import React, { useEffect, useRef } from 'react'
import { Header } from '../../components'
import { data } from '../../constants'

const Gallery = () => {
  const viteCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const galleryRef = useRef();

  useEffect(() => {
    if (window && galleryRef.current) {
      window.scrollTo(0, 0)

      window.cloudinary
        .galleryWidget({
          container: galleryRef.current,
          cloudName: viteCloudName,
          //aspectRatio: "16:9",
          mediaAssets: [
            { tag: "faux-gallery", transformation: { crop: "fit" } },
          ],
          carouselStyle: "indicators",
          carouselLocation: "bottom",
        })
        .render();
    }
  }, []);

  return (
    <div id='gallery' className='flex flex-col justify-center items-center'>
      <Header title={data.galleryInfo.title} />
      <div className='flex flex-col justify-center'>
        <div className='container mx-auto max-w-5xl p-8'>
          <p>
            {data.galleryInfo.description}
          </p>
        </div>
        <div className='container mx-auto max-w-5xl p-8'>
          <div ref={galleryRef} />
        </div>
      </div>
    </div>
  )
}

export default Gallery