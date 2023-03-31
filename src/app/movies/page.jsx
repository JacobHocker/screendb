"use client"
import SearchBox from '@/components/SearchBox';
import SearchResults from '@/components/SearchResults';
import {useState, useEffect} from 'react';

export default function Movies() {
    const [movies, setMovies] = useState({});

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
        .then((res) => res.json()
        )
        .then((data) => {setMovies(data)})
    }, [])


    return (
        <div>
            <SearchBox />

            {movies.results && <SearchResults props={movies.results} />}
        </div>
    )
}
