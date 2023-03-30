"use client"
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function HomeCard({props}) {

    
    return (
        <div className=" cursor-pointer flex flex-col justify-center bg-transparent hover:shadow-amber-300 dark:hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 hover:border-amber-300 dark:hover:border-amber-500  m-2 transition-shadow duration-200"> 
            {
            props.id && 
            <Link href={props.release_date ? `/movie/${props.id}` : props.birthdate ? `/person/${props.id}` : `/tv/${props.id}`}>
                <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.poster_path || props.backdrop_path}`} alt={props.title} className="w-full h-auto object-cover  object-top rounded-t-lg" />
                <div className="p-2">
                    <p className='line-clamp-2 text-slate-600 dark:text-slate-300 h-11'>{props.overview}</p>
                    <h2 className='truncate mt-1 text-lg font-bold text-slate-900 dark:text-slate-50'>{props.title || props.name}</h2>
                    <p className='flex items-center h-10'>
                        {props.release_date || props.first_air_date}
                        <FiThumbsUp className='h-5 mr-1 ml-3' /> 
                        {props.vote_count}
                    </p> 
                </div>
            </Link>
            }
        </div>
    )
}
