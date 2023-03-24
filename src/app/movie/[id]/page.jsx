"use client"
import {useState, useEffect } from 'react';

export default function MoviePage({ params }) {
    const [movie, setMovie] = useState({});
    const movieId = params.id;

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setMovie(data)})

        
    }, [movieId])


    return (
        <div className="mt-8">
            <div className="flex flex-col items-center">
                <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.poster_path || movie.backdrop_path}`} alt={`${movie.title}`} className="w-28" />
                <h1 className='text-3xl font-bold'>{movie.title}</h1>
            </div>
            
        </div>
    )
}
