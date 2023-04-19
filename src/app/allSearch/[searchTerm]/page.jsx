"use client"


import Pagination from "@/components/Pagination";
import SearchAllBox from "@/components/SearchAllBox";
import SearchAllResults from "@/components/SearchAllResults";
import { useEffect, useState } from "react";

export default function MovieSearchPage({ params }) {
    const [searchResults, setSearchResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&page=${pageNumber}&include_adult=false`)
        .then((r) => r.json())
        .then((data) => {setSearchResults(data)})
    }, [params.searchTerm, pageNumber])
    
    searchResults.results && searchResults.results.sort(function (a,b) {
        return b.popularity - a.popularity
    })
    return (
        <div className="pb-16">
        <SearchAllBox />
        {searchResults.results && searchResults.results.length === 0 && (
            <h1 className="text-center pt-6">No results found</h1>
        )}
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
        {searchResults.results && <SearchAllResults props={searchResults.results} />}
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>
    );
}