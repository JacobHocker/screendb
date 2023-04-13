"use client"
import { useState, useEffect } from 'react';
import SearchPeopleBox from '@/components/SearchPeopleBox';
import SearchPeopleResults from '@/components/SearchPeopleResults';
import Pagination from '@/components/Pagination';


export default function People() {
    const [people, setPeople] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    const [peopleCategory, setPeopleCategory] = useState("popular")


    // FETCHING WHAT IS DISPLAYED ON THE MOVIE PAGE
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}person/${peopleCategory}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${pageNumber}`)
        .then((res) => res.json()
        )
        .then((data) => {setPeople(data)})
    }, [peopleCategory, pageNumber]);

    
    // SELECT DROPDOWN OPTIONS
    const peopleCategoryList = [
        {
            id: 0,
            title: "Popular",
            value: "popular",
        },
        {
            id: 1,
            title: "Latest",
            value: "latest",
        },
        
    ];
    return (
        <div className='pb-8'>
            <SearchPeopleBox />
            <div className="mt-16 p-2 flex w-full justify-start ">
                <select 
                className='font-bold p-2 bg-transparent text-md md:text-xl lg:text-2xl border-2 rounded-sm hover:border-amber-400 hover:cursor-pointer border-slate-600'
                value={peopleCategory}
                onChange={(e) => setPeopleCategory(e.target.value)}>
                    {peopleCategoryList.map((cat) => (
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
                    peopleCategory === "popular" 
                        ? 
                        <h1 className="text-3xl  lg:text-4xl font-semibold">Popular People</h1>
                        :
                        <h1 className="text-3xl  lg:text-4xl font-semibold">Latest People</h1>
                }
            </div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />

            {people.results && <SearchPeopleResults props={people.results} />}
        </div>
    )
};
