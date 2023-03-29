import React from 'react';
import Image from 'next/image';
import Empty from '../assets/emptyProfile.jpg';
import NoGenderEmpty from '../assets/genderlessEmptyProfile.png';
import FemaleEmpty from '../assets/femaleEmptyProfile.webp';



export default function CreditsSlide({ props }) {
    return (
        
        <div className='px-2'>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {
                    props.profile_path !== null ?
                
                <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.profile_path}`}
                    alt={props.name} className="object-cover object-center w-full" />
                    :
                <Image src={Empty}
                    alt="empty" className="object-cover object-center w-full h-full" />
                }
                <div className="bg-gray-800 flex   bg-opacity-50 absolute w-full mt-28  ">
                    {/* <h2 className="lg:text-lg text-sm leading-4 text-base lg:leading-5 text-white">{props.name}</h2> */}
                    <div className="flex flex-col w-full h-3/6 items-center px-4">
                        <h3 className="text-md lg:text-xl font-semibold leading-5 lg:leading-6 text-white">{props.character || props.job}</h3>
                        <h2 className="lg:text-lg text-sm leading-4 text-base lg:leading-5 text-white">{props.name}</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
