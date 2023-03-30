import React from 'react';
import Image from 'next/image';
import Empty from '../assets/emptyProfile.jpg';
import Link from 'next/link';
// import NoGenderEmpty from '../assets/genderlessEmptyProfile.png';
// import FemaleEmpty from '../assets/femaleEmptyProfile.webp';



export default function CreditsSlide({ props }) {
    return (
        
        <div className='px-2'>
            <Link href={`/person/${props.id}`}>
                <div className="flex flex-shrink-0 relative w-full hover:cursor-pointer hover:shadow-sm shadow-slate-500 dark:shadow-rose-600 transition-shadow duration-200 hover:border-2 border-slate-500 dark:border-rose-600">
                    {
                        props.profile_path !== null ?
                    
                        <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.profile_path}`}
                            alt={props.name} className="object-cover object-center w-full" />
                            :
                        <Image src={Empty}
                            alt="empty" className=" w-auto h-auto" />
                    }
                    <div className="bg-gray-800 flex   bg-opacity-50 absolute w-full bottom-0">
                        <div className="flex flex-col w-full h-3/6 items-center px-4">
                            <h3 className="line-clamp-1 text-xsm/4 lg:text-xl font-semibold leading-5 lg:leading-6 text-white">{props.character || props.job}</h3>
                            <h2 className=" truncate lg:text-lg text-sm leading-4 lg:leading-5 text-white">{props.name}</h2>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}
