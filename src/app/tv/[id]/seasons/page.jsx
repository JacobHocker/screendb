import React from 'react'

export default function SeasonsPage({ params }) {

    const tvId = params.id
    return (
        <div>
            <h1>Tv Show {tvId} Seasons </h1>
        </div>
    )
}
