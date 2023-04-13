"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';
import Empty from '../assets/emptyPersonTwo.jpeg';


export default function CardPeople({props}) {

    
    return (
        <div className=" cursor-pointer flex flex-col bg-transparent hover:shadow-amber-600 dark:hover:shadow-slate-400 shadow-md rounded-lg border-2 border-slate-400 hover:border-amber-300 dark:hover:border-amber-500  m-2 transition-shadow duration-200"> 
            {
            props.id && 
            <Link href={`/person/${props.id}`}>
                {
                    props.profile_path !== null ?
                    <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.profile_path}`} alt={props.name} className="w-full h-auto object-cover  object-top rounded-t-lg" />
                    :
                    <Image src={Empty}
                            alt="empty" className="w-auto object-cover" />
                }
                
                <div className="p-2">
                    <p className='line-clamp-2 text-slate-600 dark:text-slate-300 h-11'>{props.known_for.map((know) => (
                        `${know.name || know.title}, `
                    ))}</p>
                    <h2 className='truncate mt-1 text-lg font-bold text-slate-900 dark:text-slate-50'>{props.name}</h2>
                    <p className='flex truncate items-center h-8'>
                        Known For: {props.known_for_department}
                    </p> 
                </div>
            </Link>
            }
        </div>
    )
}