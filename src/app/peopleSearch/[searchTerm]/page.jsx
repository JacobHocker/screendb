"use client"

import Pagination from "@/components/Pagination";
import SearchPeopleBox from "@/components/SearchPeopleBox";
import SearchPeopleResults from "@/components/SearchPeopleResults";
import { useEffect, useState } from "react";

export default function PeopleSearchPage({ params }) {
    const [searchResults, setSearchResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}search/person?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&page=${pageNumber}include_adult=false`)
        .then((r) => r.json())
        .then((data) => {setSearchResults(data)})
    }, [params.searchTerm, pageNumber])

    
    
    searchResults.results && searchResults.results.sort(function (a,b) {
        return b.popularity - a.popularity
    })
    
    

    return (
        <div className="pb-16">
        <SearchPeopleBox />
        {searchResults.results && searchResults.results.length === 0 && (
            <h1 className="text-center pt-6">No results found</h1>
        )}
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        {searchResults.results && <SearchPeopleResults props={searchResults.results} />}
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    );
}