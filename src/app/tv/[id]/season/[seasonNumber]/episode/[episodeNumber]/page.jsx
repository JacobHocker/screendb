"use client"
import { useState, useEffect } from 'react';
import emptyTv from '../../../../../../../assets/emptyTv.webp';
import Image from 'next/image';
import CreditPersonCarousel from '@/components/CreditPersonCarousel';
import CreditEpisodeCarousel from '@/components/CreditEpisodeCarousel';


export default function EpisodePage({ params }) {
    const [episode, setEpisode] = useState({});
    const [credits, setCredits] = useState({});
    const [season, setSeason] = useState({});


    // Grabbing the param values from the URL
    const tvId = params.id;
    const seasonNum = params.seasonNumber;
    const episodeNum = params.episodeNumber

    // Fetching the episode information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/season/${seasonNum}/episode/${episodeNum}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setEpisode(data)})
    }, [tvId, seasonNum, episodeNum]);

    // Fetching the episode credits information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/season/${seasonNum}/episode/${episodeNum}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setCredits(data)})
    }, [tvId, seasonNum, episodeNum]);

    // Fetching the season information to list other episodes  from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/season/${seasonNum}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setSeason(data)})
    }, [tvId, seasonNum]);

    console.log(season)
    return (
        <div className="w-full pb-16">
            {
                episode.id && 
                <div className='w-full mt-8'>
                    <div className='p-4 md:pt-8 flex flex-col md:grid grid-cols-2 items-center content-center max-w-6xl mx-auto md:space-x-6'>
                        {
                            episode.still_path === null ?
                            <Image src={emptyTv}
                                alt="Empty" className="w-full h-full object-cover" />
                            :
                            <Image src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${episode.still_path}`} 
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
                            alt="Episode poster"></Image>
                            
                        }
                        
                        
                        <div className="p-2 ">
                            <h2 className="text-lg  md:text-xl mb-3 font-bold">
                                {episode.name}
                            </h2>
                            <p className="text-lg mb-3">
                                <span className="font-semibold mr-1">Overview:</span>
                                {
                                    episode.overview === null || episode.overview === "" ?
                                    "No episode overview is available."
                                    :
                                    episode.overview
                                }
                            </p>
                            <p className="mb-3 md:text-lg">
                                <span className="font-semibold mr-1">Air Date:</span>
                                { episode.air_date}
                            </p>
                            <p className="mb-3 md:text-lg">
                                <span className="font-semibold mr-1">Runtime:</span>
                                { episode.runtime} Min
                            </p>
                        </div>

                    </div>
                </div>
            }
                {/* MAIN CAST CAROUSEL */}
                <div className=' mt-4 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Main Cast</h1>
                    </div>
                    {credits.cast && <CreditPersonCarousel props={credits.cast} />}
                </div>
                {/* GUEST STARS CAROUSEL */}
                <div className=' mt-10 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Guest Stars</h1>
                    </div>
                    {credits.guest_stars && <CreditPersonCarousel props={episode.guest_stars} />}
                </div>

                {/* CREW CAROUSEL */}
                <div className=' mt-10 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Crew</h1>
                    </div>
                    {credits.crew && <CreditPersonCarousel props={episode.crew} />}
                </div>

                {/* CREW CAROUSEL */}
                <div className=' mt-10 pt-4 pb-10 px-4 md:w-11/12 bg-slate-300 dark:bg-gray-600 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>More From Season {seasonNum}</h1>
                    </div>
                    {season.episodes && <CreditEpisodeCarousel props={season.episodes} tvId={tvId} seasonNum={seasonNum}  />}
                </div>
        </div>
    )
}
