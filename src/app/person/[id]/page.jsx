"use client"
import { useState, useEffect } from 'react';


export default function PersonPage({ params }) {
    const [person, setPerson] = useState({});

    const personId = params.id;

    // Fetching the person information from the database
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}person/${personId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`, { next: { revalidate: 10000 } })
        .then((r) => r.json())
        .then((data) => { setPerson(data)})
    }, [personId])

    console.log(person)
    
    return (
        <div>
            <h1>Person Page</h1>
        </div>
    )
}
