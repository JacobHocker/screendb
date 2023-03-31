"use client"

import SearchBox from "@/components/SearchBox";
import SearchResults from "@/components/SearchResults";
import { useEffect, useState } from "react";

export default function SearchPage({ params }) {
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`)
        .then((r) => r.json())
        .then((data) => {setSearchResults(data)})
    }, [params.searchTerm])
    
    
    return (
        <div>
        <SearchBox />
        {searchResults.results && searchResults.results.length === 0 && (
            <h1 className="text-center pt-6">No results found</h1>
        )}

        {searchResults.results && <SearchResults props={searchResults.results} />}
        </div>
    );
}