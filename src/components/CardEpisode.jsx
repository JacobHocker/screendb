import Image from "next/image";
import Link from "next/link";
import emptyTv from '../assets/emptyTv.webp';

export default function CardEpisode({ props, tvId, seasonNum }) {
    return (
        <div className=" mt-8 mb-8 w-full bg-slate-400 dark:bg-slate-600 dark:bg-opacity-20 bg-opacity-20 hover:shadow-amber-600 dark:hover:shadow-slate-400 shadow-md sm:rounded-lg border-2 border-slate-400 hover:border-amber-300 dark:hover:border-amber-500  ">
            <Link href={`/tv/${tvId}/season/${seasonNum}/episode/${props.episode_number}`}>
                <div className='grid grid-cols-3'>
                    {
                        props.still_path !== null ?
                        <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${props.still_path}`} alt={props.season_number} className="w-full h-full object-center object-cover   sm:rounded-tl-lg sm:rounded-bl-lg" />
                        :
                        <Image src={emptyTv}
                                alt="empty" className="w-full h-full  object-cover" />
                    }
                    <div className='flex flex-col p-2  justify-evenly items-center'>
                        <h1 className='font-bold text-md sm:text-lg md:text-2xl'>{props.name}</h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-3 mt-4">
                            <span className="font-semibold mr-1">Run Time:</span>
                            {props.runtime} minutes
                        </p>
                        <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-3 flex flex-col items-center mt-4">
                            <span className="font-semibold mr-1">Air Date:</span>
                            {props.air_date}
                        </p>
                    </div >
                    <div className='flex flex-col items-center justify-evenly'>
                        <h3 className='font-semibold text-sm sm:text-md md:text-lg lg:text-xl'>Overview:</h3>
                        <p className="text-sm line-clamp-10 sm:text-md md:text-lg lg:text-xl mb-3 ">
                            {props.overview === null || props.overview === "" ?
                            'N/A'
                            :
                            props.overview
                        }
                        </p>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}
