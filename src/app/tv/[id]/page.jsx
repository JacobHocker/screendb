"use client"
import { useState, useEffect } from "react";
import EmptyTv from '../../../assets/emptyTv.webp';
import Image from "next/image";
import emptyCompany from '../../../assets/emptyCompany.png';
import emptyPerson from '../../../assets/emptyPersonTwo.jpeg';
import TvCarousel from "@/components/TvCarousel";
import Link from "next/link";


export default function TvPage({ params }) {
    const [tvShow, setTvShow] = useState({});
    const [related, setRelated] = useState({});
    const [similar, setSimilar] = useState({});
    // const [randomSeason, setRandomSeason] = useState(0);
    const tvId = params.id ;


    // Fetching the television show basic information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setTvShow(data)})
    }, [tvId]);

    // Fetching the tv recommendations based on the show
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setRelated(data)})
    }, [tvId]);
    related.results && related.results.sort(function (a,b) {
        return b.vote_count - a.vote_count
    });

    // Fetching similar tv shows based on the show
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setSimilar(data)})
    }, [tvId]);
    similar.results && similar.results.sort(function (a,b) {
        return b.vote_count - a.vote_count
    });

    
    

    // GRABBING THE TV SHOW SEASONS ARRAY LENGTH
    const seasonsLen = tvShow.seasons?.length;
    
    
    return (
        <div className="pb-16">
            {
            tvShow.name &&
            <div className='mt-8 w-full'>
                <div className='p-4 md:pt-8 flex flex-col md:grid grid-cols-2 items-center content-center max-w-6xl mx-auto md:space-x-6'>
                    {
                        tvShow.backdrop_path === null && tvShow.poster_path === null ?
                        <Image src={EmptyTv}
                            alt="Empty" className="w-full h-full object-cover" />
                        :
                        <Image src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${tvShow.backdrop_path || tvShow.poster_path}`} 
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
                        alt="Tv poster"></Image>
                        
                    }
                    
                    
                    <div className="p-2">
                        <h2 className="text-lg  md:text-xl mb-3 font-bold">
                            {tvShow.name}
                        </h2>
                        <p className="text-lg mb-3">
                            <span className="font-semibold mr-1">Overview:</span>
                            {tvShow.overview}
                        </p>
                        <p className="mb-3 md:text-lg">
                            <span className="font-semibold mr-1">Date Released:</span>
                            { tvShow.first_air_date}
                        </p>
                    </div>
                </div>

                {/* TV SHOW METRICS */}
                <div className='p-4 w-full  md:w-9/12 bg-slate-300 dark:bg-gray-600 md:mt-16 md:p-6 grid grid-cols-2  justify-items-center md:mx-auto md:rounded-lg'>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-1'>In Production:</span>
                        {tvShow.in_production === true ? 'Yes' : 'No'}
                    </p>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-1'>Seasons:</span>
                        {tvShow.number_of_seasons}
                    </p>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-1'>Episodes:</span>
                        {tvShow.number_of_episodes}
                    </p>
                    <p className='mb-3 md:text-lg flex items-center content-center'>
                        <span className='font-semibold mr-2'>Last Air Date:</span>
                        {tvShow.last_air_date}
                    </p>
                </div>

                {/* TV SHOW PRODUCTION COMPANIES & LANGUAGES SECTION */}
                <div className='p-4 w-full  mt-8 md:w-9/12 bg-slate-300 dark:bg-gray-600 md:mt-16 md:p-6 flex flex-col  items-center md:mx-auto md:rounded-lg'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Created By</h1>
                    <div className='w-full p-4 md:p-6'>
                        <ul className=' grid grid-cols-2 justify-items-center'>
                            { 
                            tvShow.created_by && tvShow.created_by.map((c) => (
                                <Link key={c.id} href={`/person/${c.id}`}>
                                    <li  className='text-xl lg:text-2xl flex flex-col justify-center items-center hover:text-amber-600 dark:hover:text-amber-400  transition ease-in-out delay-100'>
                                        {
                                            c.profile_path === null ? 
                                            <Image src={emptyPerson} alt="Empty" width={200} height={100} style={{ maxWidth: "100%", maxHeight:"25%"}} className='w-40 sm:w-48 md:w-52' ></Image>
                                            :
                                            <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${c.profile_path}`} alt={c.name} className='w-40 rounded-md sm:w-44 md:w-52 ' />
                                        }
                                        <h1 className='p-2 text-lg md:text-2xl'>{c.name}</h1>
                                    </li>
                                </Link>
                            ))
                            }
                        </ul>
                    </div>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-6'>Production Countries</h1>
                    <div className='w-full p-4 md:p-6'>
                        <ul className=' grid grid-cols-2 justify-items-center'>
                            { 
                            tvShow.production_countries && tvShow.production_countries.map((prod) => (
                                <li key={prod.id} className='text-xl lg:text-2xl '>
                                    {prod.name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                

                {/* TV SHOW SEASON LINK */}
                <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 flex flex-col items-center md:mx-auto md:rounded-lg'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>{tvShow.name} Seasons </h1>
                    { tvShow.seasons && 
                    <Link href={`/tv/${tvId}/seasons`}>
                        <Image
                        src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${tvShow.seasons[Math.floor(Math.random() * seasonsLen)].poster_path}`} 
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
                        alt="Season poster"></Image>
                    </Link>
                    }
                </div>
                
                {/* TV SHOW GENRE SECTION */}
                <div className='p-4 w-full  mt-8 md:w-9/12 bg-slate-300 dark:bg-gray-600 md:mt-16 md:p-6 flex flex-col  items-center md:mx-auto md:rounded-lg'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Genres</h1>
                    <div className='w-full p-4 md:p-6'>
                        <ul className='  grid grid-cols-2  justify-items-center '>
                            { 
                            tvShow.genres && tvShow.genres.map((genre) => (
                                <Link key={genre.id} href={`/genre/${genre.id}`}>
                                    <li  className='text-xl lg:text-2xl hover:text-amber-600 dark:hover:text-amber-400  transition ease-in-out delay-100'>
                                        {genre.name}
                                    </li>
                                </Link>
                            ))
                            }
                        </ul>
                    </div>
                </div>

                {/* TV SHOW PRODUCTION COMPANIES & LANGUAGES SECTION */}
                <div className='p-4 w-full  mt-8 md:w-9/12 bg-slate-300 dark:bg-gray-600 md:mt-16 md:p-6 flex flex-col  items-center md:mx-auto md:rounded-lg'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Produced By</h1>
                    <div className='w-full p-4 md:p-6'>
                        <ul className=' grid grid-cols-2 justify-items-center'>
                            { 
                            tvShow.production_companies && tvShow.production_companies.map((comp) => (
                                <Link key={comp.id} href={`/company/${comp.id}`}>
                                    <li  className='text-xl lg:text-2xl flex flex-col justify-center items-center hover:text-amber-600 dark:hover:text-amber-400  transition ease-in-out delay-100'>
                                        {
                                            comp.logo_path === null ? 
                                            <Image src={emptyCompany} alt="Empty" width={200} height={100} style={{ maxWidth: "100%", maxHeight:"25%"}} className='w-40 sm:w-48 md:w-52' ></Image>
                                            :
                                            <img src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${comp.logo_path}`} alt={comp.name} className='w-40 sm:w-44 md:w-52 ' />
                                        }
                                        <h1 className='p-2 text-lg md:text-2xl'>{comp.name}</h1>
                                    </li>
                                </Link>
                            ))
                            }
                        </ul>
                    </div>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-6'>Spoken Languages</h1>
                    <div className='w-full p-4 md:p-6'>
                        <ul className=' grid grid-cols-2 justify-items-center'>
                            { 
                            tvShow.spoken_languages && tvShow.spoken_languages.map((lang) => (
                                <li key={lang.id} className='text-xl lg:text-2xl '>
                                    {lang.english_name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>

                {/* RELATED MOVIES SECTION*/}
                <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                    <div className='flex items-center justify-center my-4'>
                            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Related Tv Shows</h1>
                    </div>
                    { related.results && 
                    related.results.length === 0 ?
                    <TvCarousel props={similar.results} />
                    :
                    <TvCarousel props={related.results} />
                    }
                </div>

                
            </div>
            }
        </div>
    )
}
