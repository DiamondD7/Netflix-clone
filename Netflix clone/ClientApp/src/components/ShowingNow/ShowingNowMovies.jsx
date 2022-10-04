import React, { useState,useEffect } from 'react';
import { Showing_URL } from '../../ApiAuthentication';
import ShowingNowMoviesDisplay from './ShowingNowMoviesDisplay';

export default function ShowingNowMovies() {

    const [showingMovies, setShowingMovies] = useState([]);

    useEffect(() => {
        fetch(Showing_URL)
            .then(res => res.json())
            .then((data) => {
                setShowingMovies(data.results)
            })
    },[])
    return (
        <ShowingNowMoviesDisplay data={showingMovies} />
        )
}