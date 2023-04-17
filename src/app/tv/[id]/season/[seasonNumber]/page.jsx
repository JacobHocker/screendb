import React from 'react'

export default function SeasonPage({ params }) {
    const tvId = params.id;
    const seasonNum = params.seasonNumber;
    return (
        <div>
            <h1>Tv Show:{tvId} Season:{seasonNum} </h1>
        </div>
    )
}
