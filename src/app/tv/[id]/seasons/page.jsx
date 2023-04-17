"use client"
import CardSeason from '@/components/CardSeason';
import { useEffect, useState } from 'react'

export default function SeasonsPage({ params }) {
    const [tvShow, setTvShow] = useState({});
    const tvId = params.id

    // Fetching the television show basic information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setTvShow(data)})
    }, [tvId]);

    console.log(tvShow)
    

    
    return (
        <div className='pb-16'>
            {
                tvShow.id && 
                <div className='flex flex-col items-center'>

                    {/* SEASONS PAGE HEADER */}
                    <div className='mt-16'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>{tvShow.name} Seasons </h1>
                    </div>
                    {/* SEASONS CONTAINER */}
                    <div className='w-full sm:w-10/12 md:w-9/12'>
                        {tvShow.seasons && tvShow.seasons.map((season) => (
                            <CardSeason key={season.id} tvId={tvId} props={season} />
                        ))}
                    </div>
                </div>
            }
            
        </div>
    )
}
