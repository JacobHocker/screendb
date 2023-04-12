import React from 'react';
import Image from 'next/image';
import Empty from '../assets/emptyMovie.png';
import EmptyPerson from '../assets/emptyPersonTwo.jpeg';
import Link from 'next/link';



export default function HomeSlide({ props }) {
    return (
        
        <div className='px-2 h-full'>
            <Link href={props.release_date ? `/movie/${props.id}` : props.first_air_date ? `/tv/${props.id}` : `/person/${props.id}`}>
                <div className="flex flex-shrink-0 relative w-full h-full hover:cursor-pointer hover:shadow-sm dark:hover:shadow-slate-500 hover:shadow-amber-600 transition-shadow duration-200 hover:border-2 border-amber-600 dark:border-amber-500">
                    {
                        
                        props.poster_path === null ?
                        <Image src={Empty}
                                alt="Empty.." className="w-full h-full object-cover" />
                            :
                        props.profile_path === null ?
                        <Image src={EmptyPerson}
                                alt="Empty.." className="w-full h-full object-cover" />
                        :
                        <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.poster_path || props.profile_path || props.backdrop_path}`}
                            alt={props.title || props.name} className="object-cover object-center w-full" />
                    }
                    <div className="bg-gray-800 flex   bg-opacity-50 absolute w-full bottom-0">
                        <div className="flex flex-col w-full h-3/6 items-center px-2 text-center">
                            <h2 className="truncate-ellipsis lg:text-lg text-sm leading-4 lg:leading-5 text-white">{props.title || props.name}</h2>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}