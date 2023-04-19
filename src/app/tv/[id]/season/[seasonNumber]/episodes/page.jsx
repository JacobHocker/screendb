"use client"
import CardEpisode from '@/components/CardEpisode';

import { useEffect, useState } from 'react'

export default function SeasonsPage({ params }) {
    const [season, setSeason] = useState({});
    const tvId = params.id;
    const seasonNum = params.seasonNumber;

    // Fetching the tv seasons information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/season/${seasonNum}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setSeason(data)})
    }, [tvId, seasonNum]);

    
    
    
    
    return (
        <div className='pb-16'>
            {
                season.id && 
                <div className='flex flex-col items-center'>
                    {/* EPISODES PAGE HEADER */}
                    <div className='mt-16'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Season {seasonNum} Episodes </h1>
                    </div>
                    {/* EPISODES CONTAINER */}
                    <div className='w-full sm:w-10/12 md:w-9/12'>
                        {season.episodes && season.episodes.map((epi) => (
                            <CardEpisode key={epi.id} tvId={tvId} seasonNum={seasonNum} props={epi} />
                        ))}
                    </div>
                </div>
            }
            
        </div>
    )
}