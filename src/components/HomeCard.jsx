"use client"
import { FiThumbsUp } from 'react-icons/fi';

export default function HomeCard({props}) {

    //flex justify-center p-4 h-24
    return (
        <div className=" flex flex-col justify-center bg-transparent border-2 border-rose-400 dark:border-rose-600 rounded"> 
            
                <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.poster_path || props.backdrop_path}`} alt={props.title} className="w-full h-auto object-cover  object-top" />
                
            
            <div className="p-2">
                <p className='line-clamp-2 truncate text-md'>{props.overview}</p>
                <h2 className='truncate text-lg font-bold'>{props.title || props.name}</h2>
                <p className='flex items-center'>
                    {props.release_date || props.first_air_date}
                    <FiThumbsUp className='h-5 mr-1 ml-3' /> 
                    {props.vote_count}
                </p> 
            </div>
            {/* <div className="flex justify-center p-4 h-24">
                
            </div>
            <div className="">
                
            </div> */}
        </div>
    )
}
