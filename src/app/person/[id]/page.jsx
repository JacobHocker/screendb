"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  AiOutlineUp } from 'react-icons/ai';
import CreditMovieCarousel from '@/components/CreditMovieCarousel';
import CreditTvCarousel from '@/components/CreditTvCarousel';
import { FaImdb } from 'react-icons/fa';

export default function PersonPage({ params }) {
    const [person, setPerson] = useState({});
    const [movieCredits, setMovieCredits] = useState({});
    const [tvCredits, setTvCredits] = useState({});
    const [extendBio, setExtendBio] = useState(false);
    
    const personId = params.id;

    // Fetching the person information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}person/${personId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setPerson(data)})
    }, [personId]);

    // Fetching the person movie credits from database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}person/${personId}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setMovieCredits(data)})
    }, [personId]);

    // Fetching the person television credits from database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}person/${personId}/tv_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setTvCredits(data)})
    }, [personId]);

    // Sets order of the movies listed by most to least popular based on vote count
    movieCredits.cast && movieCredits.cast.sort( function(a,b) {
        return b.vote_count - a.vote_count
    });
    movieCredits.crew && movieCredits.crew.sort( function(a,b) {
        return b.vote_count - a.vote_count
    });
    //Sets order of television shows listed by most to least popular based on vote count
    tvCredits.cast && tvCredits.cast.sort( function(a,b) {
        return b.vote_count - a.vote_count
    });

    // Calculate age if person is still alive
    const getAliveAge = (dateString) => {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    // Calculate age if person is no longer alive
    const getDeadAge = (birth, death) => {
        let birthDate = new Date(birth);
        let deathDate = new Date(death);
        let age = deathDate.getFullYear() - birthDate.getFullYear();
        let m = deathDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && deathDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };


    console.log(person)

    
    
    return (
        <div className='pb-10'>
            {
                person.name && 
                <div className='flex flex-col w-full'>
                    {/* PERSON PAGE HEADER */}
                    <div className='mt-8 w-full'>
                        <div className='p-4 md:pt-8 flex flex-col md:grid grid-cols-2 items-center content-center max-w-4xl mx-auto md:space-x-4'>
                            <Image src={`${process.env.NEXT_PUBLIC_POSTER_PATH}${person.profile_path}`} 
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
                            alt="Person poster"></Image>
                            
                            <div className="p-2">
                                <h2 className="text-lg  md:text-xl mb-3 font-bold">
                                    {person.name}
                                </h2>
                                <p className={`text-lg mb-3 ${extendBio === true ? 'line-clamp-15' : 'line-clamp-8'}`}>
                                    <span className="font-semibold mr-1">Biography:</span>
                                    {person.biography}
                                    
                                </p>
                                <div className='w-full text-gray-500 hover:text-amber-600 dark:hover:text-amber-500 p-2 flex justify-center items-center mb-4 cursor-pointer bg-gray-300 bg-opacity-50 dark:bg-gray-600 dark:bg-opacity-50 rounded-lg' onClick={() => {setExtendBio(!extendBio)}}>
                                    {
                                    extendBio === false ?
                                    <h1 className='font-bold'>Learn more...</h1>
                                    :
                                    <AiOutlineUp className='font-bold' />
                                    }
                                </div>
                                <p className="mb-3 md:text-lg">
                                    <span className="font-semibold mr-1">Birthday:</span>
                                    {person.birthday} {person.deathday === null ? `(Age: ${getAliveAge(person.birthday)})` : <></>}
                                </p>
                                {
                                    person.deathday === null ?
                                    <></> 
                                    :
                                    <p className="mb-3 md:text-lg">
                                        <span className="font-semibold mr-1">Died:</span>
                                        {person.deathday} (Age: {getDeadAge(person.birthday, person.deathday)})
                                    </p>
                                }
                                <p className="mb-3 md:text-lg">
                                    <span className="font-semibold mr-1">Place of Birth:</span>
                                    {person.place_of_birth}
                                </p>
                            </div>
                        </div>
                    </div> 

                    {/* PERSON EXTERNAL ID'S SOCIAL LINKS */}
                    <div className='p-4 w-full  md:w-9/12 bg-slate-300 dark:bg-gray-600 md:mt-16 md:p-6 grid grid-cols-2  justify-items-center md:mx-auto md:rounded-lg'>
                        
                        <p className='mb-3 md:text-lg flex items-center content-center'>
                            {/* <span className='font-semibold mr-2'>Offi Page:</span> */}
                            <Link href={`https://imdb.com/name/${person.imdb_id}/`} target="_blank">
                                <FaImdb  className='text-2xl md:text-4xl hover:text-amber-500'/>
                            </Link>
                        </p>
                    </div>
                    {/* PERSON MOVIE CREDITS CAST & CREW */}
                    <div className=' mt-8 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                        <div className='flex items-center justify-center my-4'>
                            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Movies Known For:</h1>
                        </div>
                        <div className='pb-8 '>
                            <div className='flex items-center justify-center my-4'>
                                <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Cast</h1>
                            </div>
                            <CreditMovieCarousel props={movieCredits.cast} />
                        </div>
                        <div>
                            <div className='flex items-center justify-center my-4'>
                                <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Crew</h1>
                            </div>
                            <CreditMovieCarousel props={movieCredits.crew} />
                        </div>
                    </div>

                    {/* PERSON TELEVISION CREDITS CAST */}
                    <div className=' mt-16 pt-4 pb-10 px-4 md:w-11/12 bg-slate-400 dark:bg-gray-800 justify-items-center md:mx-auto md:rounded-lg'>
                        <div className='flex items-center justify-center my-4'>
                            <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl items-center'>Television Known For:</h1>
                        </div>
                        <div className='pb-8 '>
                            <CreditTvCarousel props={tvCredits.cast} />
                        </div>
                    </div>
                </div>

                



            }
            
        </div>
    )
}
