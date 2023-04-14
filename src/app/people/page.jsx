"use client"
import { useState, useEffect } from 'react';
import SearchPeopleBox from '@/components/SearchPeopleBox';
import SearchPeopleResults from '@/components/SearchPeopleResults';
import Pagination from '@/components/Pagination';


export default function People() {
    const [people, setPeople] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    


    // FETCHING WHAT IS DISPLAYED ON THE PEOPLE PAGE
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${pageNumber}`)
        .then((res) => res.json()
        )
        .then((data) => {setPeople(data)})
    }, [ pageNumber]);

    
    
    return (
        <div className='pb-8'>
            <SearchPeopleBox />
            <div className='w-full flex justify-center mt-6'>
                <h1 className="text-3xl  lg:text-4xl font-semibold">Popular People</h1>
            </div>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />

            {people.results && <SearchPeopleResults props={people.results} />}
        </div>
    )
};
