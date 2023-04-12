"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchMovieBox() {
    const [search, setSearch] = useState("");

    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/movieSearch/${search}`);
        
    }
    return (
    <form
        onSubmit={handleSubmit}
        className="flex max-w-2xl mt-8 mx-auto border-2 border-slate-600 hover:border-amber-600 dark:border-slate-200 border-opacity-50 dark:border-opacity-50 dark:hover:border-amber-300 rounded-md justify-between items-center px-5"
    >
    <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Movies..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
    />
        <button
            disabled={!search}
            type="submit"
            className="text-amber-600 disabled:text-gray-400"
        >
        Search
        </button>
    </form>
    );
}