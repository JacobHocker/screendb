"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import emptyTv from '../../../../../assets/emptyTv.webp';
import CardEpisode from '@/components/CardEpisode';


export default function SeasonPage({ params }) {
    const [season, setSeason] = useState({});
    
    const tvId = params.id;
    const seasonNum = params.seasonNumber;

    // Fetching the tv season information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/season/${seasonNum}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setSeason(data)})
    }, [tvId, seasonNum]);

    


    

    return (
        <div className="pb-16">
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
                        {/* Episodes CONTAINER */}
                        <div className='w-full sm:w-10/12 md:w-9/12'>
                            {season.episodes && season.episodes.map((epi) => (
                                <CardEpisode key={epi.id} tvId={tvId} seasonNum={seasonNum} props={epi} />
                            ))}
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}
