import React from 'react'

export default function EpisodePage({ params }) {

    const tvId = params.id;
    const seasonNum = params.seasonNumber;
    const episodeNum = params.episodeNumber

    return (
        <div>
            <h1>Show:{tvId} Season:{seasonNum} Episode:{episodeNum}</h1>
        </div>
    )
}
