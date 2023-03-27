"use client"
import Image from 'next/image';
import {useState, useEffect } from 'react';

export default function MoviePage({ params }) {
    const [movie, setMovie] = useState({});
    const movieId = params.id;

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setMovie(data)})

        
    }, [movieId])

    console.log(movie)
    return (
        <div className='w-full'>
            {
            movie.title && 
            <div className='mt-8'>
                <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                    <Image src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.backdrop_path || movie.poster_path}`} 
                    width={500}
                    height={300}
                    className="rounded-lg"
                    style={{
                        maxWidth: "100%",
                        height: "100%",
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="Movie poster"></Image>
                    <h1>{movie.title}</h1>
                </div>
                <div className='mt-8'>
                    <p></p>
                </div>


            </div>
            }
            
            
        </div>
    )
}
