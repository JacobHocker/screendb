"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import emptyTv from '../../../../../assets/emptyTv.webp';

import Link from 'next/link';
import CreditSeasonCarousel from '@/components/CreditSeasonCarousel';
import CreditPersonCarousel from '@/components/CreditPersonCarousel';


export default function SeasonPage({ params }) {
    const [season, setSeason] = useState({});
    const [tvShow, setTvShow] = useState({});
    const [credits, setCredits] = useState({});
    
    const tvId = params.id;
    const seasonNum = params.seasonNumber;

    // Fetching the tv season &  season episodes information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/season/${seasonNum}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setSeason(data)})
    }, [tvId, seasonNum]);

    // Fetching the tv show  information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setTvShow(data)})
    }, [tvId]);

    // Fetching the tv season credits information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/season/${seasonNum}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setCredits(data)})
    }, [tvId, seasonNum]);


    


    // GRABBING THE SEASON EPISODES ARRAY LENGTH
    const episodeLen = season.episodes?.length;

    return (
        <div className="mt-10 pb-16">
            {
                season.id && 
                <div>
                    <div className='p-4 md:pt-8 flex flex-col md:grid grid-cols-2 items-center content-center max-w-6xl mx-auto md:space-x-6'>
                        {
                            season.poster_path === null ?
                            <Image src={emptyTv}
                                alt="Empty" className="w-full h-full object-cover" />
                            :
                            <Image src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${season.poster_path}`} 
                            width={500}
                            height={300}
                            quality='100'
                            className="rounded-lg "
                            style={{
                                objectFit: "cover",
                                maxWidth: "100%",
                                height: "100%",
                            }}
                            placeholder="blur"
                            blurDataURL="/spinner.svg"
                            alt="Season poster"></Image>
                            
                        }
                        
                        
                        <div className="p-2 ">
                            <h2 className="text-lg  md:text-xl mb-3 font-bold">
                                {season.name}
                            </h2>
                            <p className="text-lg mb-3">
                                <span className="font-semibold mr-1">Overview:</span>
                                {
                                    season.overview === null || season.overview === "" ?
                                    "No season overview is available.  See episodes overview."
                                    :
                                    season.overview
                                }
                            </p>
                            <p className="mb-3 md:text-lg">
                                <span className="font-semibold mr-1">First Air Date:</span>
                                { season.air_date}
                            </p>
                            <p className="mb-3 md:text-lg">
                                <span className="font-semibold mr-1">Number of Episodes:</span>
                                { season.episodes.length}
                            </p>
                        </div>
                        
                        {/* SEASON EPISODES LINK */}
                        <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 flex flex-col items-center md:mx-auto sm:rounded-lg'>
                            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Season {seasonNum} Episodes </h1>
                            { season.episodes && 
                            <Link href={`/tv/${tvId}/season/${seasonNum}/episodes`}>
                                <Image
                                src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${season.episodes[Math.floor(Math.random() * episodeLen)].still_path}`} 
                                width={500}
                                height={150}
                                quality='100'
                                className="rounded-lg mt-8 hover:border-2 border-amber-600 dark:border-amber-500"
                                style={{
                                    maxWidth: "100%",
                                    height: "50%",
                                }}
                                placeholder="blur"
                                blurDataURL="/spinner.svg"
                                alt="episode poster"></Image>
                            </Link>
                            }
                        </div>

                        
                    </div>
                </div>
            }
                {/* MAIN CAST CAROUSEL */}
                <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Cast</h1>
                    </div>
                    {credits.cast && <CreditPersonCarousel props={credits.cast} />}
                </div>
                {/* MAIN CAST CAROUSEL */}
                <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Crew</h1>
                    </div>
                    {credits.crew && <CreditPersonCarousel props={credits.crew} />}
                </div>

                {/* SEASONS FROM SHOW CAROUSEL */}
                <div className=' mt-10 pt-4 pb-10 px-4 md:w-11/12 bg-slate-300 dark:bg-gray-600 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Seasons From {tvShow.name}</h1>
                    </div>
                    {tvShow.seasons && <CreditSeasonCarousel props={tvShow.seasons} tvId={tvId}  />}
                </div>
        </div>
    )
}
