
import React, {useState, useEffect} from 'react';
import { Popular_URL } from '../../ApiAuthentication'
import PopularMoviesDisplay from './PopularMoviesDisplay';


export default function PopularMoviesData() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(Popular_URL)
            .then(res => res.json())
            .then((data) => {
                setItem(data.results);
                console.log(data.results);
            })
    }, [])

    return (
        <PopularMoviesDisplay data={item} />
        )
}