import React from 'react';
import Image from 'next/image';
import Empty from '../assets/emptyMovie.png';
import Link from 'next/link';



export default function CreditMovieSlide({ props }) {
    return (
        
        <div className='px-2 h-full'>
            <Link href={`/person/${props.id}`}>
                <div className="flex flex-shrink-0 relative w-full h-full hover:cursor-pointer hover:shadow-sm dark:hover:shadow-slate-500 hover:shadow-amber-600 transition-shadow duration-200 hover:border-2 border-amber-600 dark:border-amber-500">
                    {
                        props.poster_path !== null ?
                    
                        <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.poster_path || props.backdrop_path}`}
                            alt={props.name} className="object-cover object-center w-full" />
                            :
                        <Image src={Empty}
                            alt="empty" className="w-full h-full object-cover" />
                    }
                    <div className="bg-gray-800 flex   bg-opacity-50 absolute w-full bottom-0">
                        <div className="flex flex-col w-full h-3/6 items-center px-2 text-center">
                            <h3 className="line-clamp-1 text-xsm/4 lg:text-lg font-semibold leading-5 lg:leading-6 text-white">{props.title}</h3>
                            <h2 className="truncate-ellipsis lg:text-lg text-sm leading-4 lg:leading-5 text-white">{props.character || props.job}</h2>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}
