"use client"
import Pagination from '@/components/Pagination';
import SearchTvBox from '@/components/SearchTvBox';
import SearchTvResults from '@/components/SearchTvResults';
import { useState, useEffect } from 'react';

export default function TvShowsPage() {
    const [tvShows, setTvShows] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    const [tvCategory, setTvCategory] = useState("top_rated");
    


    // FETCHING WHAT IS DISPLAYED ON THE TV PAGE
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}tv/${tvCategory}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${pageNumber}`)
        .then((res) => res.json()
        )
        .then((data) => {setTvShows(data)})
    }, [tvCategory, pageNumber]);

    // SELECT DROPDOWN OPTIONS
    const tvCategoryList = [
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
        
    ];

    return (
        <div className='pb-8'>
            <SearchTvBox />
            <div className="mt-16 p-2 flex w-full justify-start ">
                <select 
                className='font-bold p-2 bg-transparent text-md md:text-xl lg:text-2xl border-2 rounded-sm hover:border-amber-400 hover:cursor-pointer border-slate-600'
                value={tvCategory}
                onChange={(e) => setTvCategory(e.target.value)}>
                    {tvCategoryList.map((cat) => (
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
                    tvCategory === "top_rated" 
                        ? 
                        <h1 className="text-3xl  lg:text-4xl font-semibold">Top Rated Television</h1>
                        :
                        <h1 className="text-3xl  lg:text-4xl font-semibold">Popular Television</h1>
                }
            </div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />

            {tvShows.results && <SearchTvResults props={tvShows.results} />}

            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />

        </div>
    )
}
