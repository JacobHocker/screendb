"use client"
import {useState, useEffect } from 'react';


export default function MoviePage({ params }) {
    const [movie, setMovie] = useState({});
    const movieId = params.id;

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setMovie(data)})

        console.log(movie)
    }, [movieId])

    
    return (
        <div className="">
            <h1>{movie.title}</h1>
        </div>
    )
}
