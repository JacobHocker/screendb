"use client"
import Pagination from '@/components/Pagination';
import SearchBox from '@/components/SearchMovieBox';
import SearchResults from '@/components/SearchMovieResults';
import {useState, useEffect} from 'react';


export default function Movies() {
    const [movies, setMovies] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    const [movieCategory, setMovieCategory] = useState("top_rated");
    


    // FETCHING WHAT IS DISPLAYED ON THE MOVIE PAGE
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/${movieCategory}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${pageNumber}`)
        .then((res) => res.json()
        )
        .then((data) => {setMovies(data)})
    }, [movieCategory, pageNumber])

    // SELECT DROPDOWN OPTIONS
    const movieCategoryList = [
        {
            id: 0,
            title: "Top Rated",
            value: "top_rated",
        },
        {
            id: 1,
            title: "Popular",
            value: "popular",
        },
        {
            id: 2,
            title: "Now Playing",
            value: "now_playing",
        },
        
    ];

    


    return (
        <div className='pb-8'>
            <SearchBox />
            <div className="mt-16 p-2 flex w-full justify-start ">
                <select 
                className='font-bold bg-transparent text-md md:text-xl lg:text-2xl border-2 rounded-sm hover:border-amber-400 hover:cursor-pointer border-slate-600'
                value={movieCategory}
                onChange={(e) => setMovieCategory(e.target.value)}>
                    {movieCategoryList.map((cat) => (
                        <option 
                            className=''
                            key={cat.id}
                            value={cat.value}
                        >
                            {cat.title}
                        </option>
                    ))}
                </select> 
            </div>
            <div className='w-full flex justify-center mt-6'>
                {
                    movieCategory === "top_rated" 
                        ? 
                        <h1 className="text-3xl  lg:text-4xl font-semibold">Top Rated Movies</h1>
                        :
                        movieCategory === "popular" 
                        ?
                        <h1 className="text-3xl  lg:text-4xl font-semibold">Popular Movies</h1>
                        :
                        <h1 className="text-3xl  lg:text-4xl font-semibold">Movies Now Playing</h1>
                }
            </div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />

            {movies.results && <SearchResults props={movies.results} />}
        </div>
    )
}
