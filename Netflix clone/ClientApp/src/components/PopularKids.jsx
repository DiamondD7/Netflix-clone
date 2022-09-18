import React, { useState, useEffect } from 'react';
import { Kids_URL } from '../ApiAuthentication';
import KidsDataMovies from './KidsDataMovies';

export default function PopularKids() {

    const [kidMovies, setkidMovies] = useState([]);

    useEffect(() => {
        fetch(Kids_URL)
            .then(res => res.json())
            .then((data) => {
                setkidMovies(data.results)
            })
    }, [])


        
    return (
        <KidsDataMovies data={kidMovies} />
    )
}