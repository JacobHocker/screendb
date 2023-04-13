"use client"

import SearchMovieBox from "@/components/SearchMovieBox";
import SearchMovieResults from "@/components/SearchMovieResults";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";

export default function MovieSearchPage({ params }) {
    const [searchResults, setSearchResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&page=${pageNumber}&include_adult=false`)
        .then((r) => r.json())
        .then((data) => {setSearchResults(data)})
    }, [params.searchTerm, pageNumber])
    
    searchResults.results && searchResults.results.sort(function (a,b) {
        return b.vote_count - a.vote_count
    })
    return (
        <div className="pb-16">
        <SearchMovieBox />
        {searchResults.results && searchResults.results.length === 0 && (
            <h1 className="text-center pt-6">No results found</h1>
        )}
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
        {searchResults.results && <SearchMovieResults props={searchResults.results} />}
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>
    );
}