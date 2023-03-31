"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaImdb } from 'react-icons/fa';
import {useState, useEffect } from 'react';
import CreditsCarousel from '@/components/CreditsCarousel';

export default function MoviePage({ params }) {
    const [movie, setMovie] = useState({});
    const [credits, setCredits] = useState([]);
    const movieId = params.id;

    // Fetching the movie information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setMovie(data)})
    }, [movieId])

    // Fetching the movie information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setCredits(data)})
    }, [movieId])

    console.log(movie)

    // Converting the raw minute number to hours and minutes
    const timeConvert = (num) => {
        const hours = Math.floor(num / 60);
        const minutes = num % 60;
        return `${hours}h:${minutes}m`;
    }

    // Taking the Rating From API and turnin it into a percentage
    const movieRating = Math.round(movie.vote_average * 10)
    
    
    // Taking the long form dollar amount and abbreviating it
    const currency = (value) => {
        let newValue = value;
        if (value >= 1000) {
            const suffixes = ["", "K", "M", "B","T"];
            const suffixNum = Math.floor( (""+value).length/3 );
            let shortValue = '';
            for (let precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
                let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
                if (dotLessShortValue.length <= 2) { break; }
            }
            if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
            newValue = shortValue+suffixes[suffixNum];
        }
        return newValue;
    }

    return (
        <div className='w-full pb-24'>
            {
            movie.title && 
            <div className='mt-8 w-full'>
                <div className='p-4 md:pt-8 flex flex-col md:grid grid-cols-2 items-center content-center max-w-6xl mx-auto md:space-x-6'>
                    <Image src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${movie.backdrop_path || movie.poster_path}`} 
                    width={500}
                    height={300}
                    quality='100'
                    className="rounded-lg "
                    style={{
                        maxWidth: "100%",
                        height: "100%",
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="Movie poster"></Image>
                    
                    <div className="p-2">
                        <h2 className="text-lg  md:text-xl mb-3 font-bold">
                            {movie.title || movie.name}
                        </h2>
                        <p className="text-lg mb-3">
                            <span className="font-semibold mr-1">Overview:</span>
                            {movie.overview}
                        </p>
                        <p className="mb-3 md:text-lg">
                            <span className="font-semibold mr-1">Date Released:</span>
                            {movie.release_date || movie.first_air_date}
                        </p>
                        <p className="mb-3 md:text-lg">
                            <span className="font-semibold mr-1">Audience Rating:</span>
                            <span className={movieRating === 100 ? 'text-emerald-600 dark:text-emerald-400 font-bold ' : movieRating <= 99 && movieRating >= 90 ? 'text-amber-600 dark:text-amber-400 font-bold ' : movieRating <= 89 && movieRating >= 80 ? 'text-blue-600 dark:text-blue-400 font-bold '  : movieRating <= 79 && movieRating >= 70 ? 'text-yellow-600 dark:text-yellow-400 font-bold ' : 'text-red-600 dark:text-red-400 font-bold ' }>{movieRating}%</span>
                        </p>
                        
                    </div>
                </div>
                <div className='p-4 w-full  md:w-9/12 bg-slate-300 dark:bg-gray-600 md:mt-16 md:p-6 grid grid-cols-2  justify-items-center md:mx-auto md:rounded-lg'>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-1'>Budget:</span>
                        ${currency(movie.budget)} USD
                    </p>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-1'>Runtime:</span>
                        {timeConvert(movie.runtime)}
                    </p>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-1'>Revenue:</span>
                        ${currency(movie.revenue)} USD
                    </p>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-2'>Official Page:</span>
                        <Link href={`https://imdb.com/title/${movie.imdb_id}/`} target="_blank">
                            <FaImdb  className='text-2xl md:text-4xl hover:text-amber-500'/>
                        </Link>
                    </p>
                </div>
                
                <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Cast:</h1>
                    </div>
                    <CreditsCarousel props={credits.cast} />
                </div>
                <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                        <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Crew:</h1>
                    </div>
                    <CreditsCarousel props={credits.crew} />
                </div>
            </div>
            }
            
            
        </div>
    )
}
