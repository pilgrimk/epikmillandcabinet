import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import shortid from 'shortid'

const Card = ({ infoItem }) => {
    const [flexDirection, setFlexDirection] = useState();

    const mySetFlexDirection = (rev) => {
        if (rev === 'true') {
            setFlexDirection('md:flex-row-reverse');
        } else {
            setFlexDirection('');
        };
    };

    useEffect(() => {
        AOS.init({
            offset: 400,
            duration: 2000
        });

        mySetFlexDirection(infoItem.reverse);
    }, [])

    return (
        <div
            data-aos={infoItem.direction}
            className={`${infoItem.bg_color} w-100 m-4 rounded-md shadow-md`}
        >
            <div className={`flex flex-col justify-center items-center  md:flex-row ${flexDirection} `}>
                <div className='md:w-1/2 p-4'>
                    <img src={infoItem.imgUrl} alt={infoItem.alt} />
                </div>
                <div className='md:w-1/2 p-4'>
                    <h1 className='text-4xl underline py-2 font-serif'>{infoItem.topLine}</h1>
                    <h1 className='text-2xl italic py-2'>{infoItem.headline}</h1>
                    {infoItem.description.map((par) => (
                        <div key={shortid.generate()}>
                            <p className=''>
                                {par}
                            </p><br />
                        </div>
                    ))}
                    {(infoItem.buttonLabel) &&
                        <button type='button' className='' >{infoItem.buttonLabel}</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card