import React, {useState,useEffect} from 'react';
import { TV_URL } from '../../ApiAuthentication';
import TvShowsDisplay from './TvShowsDisplay';

export default function TvShowsData() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(TV_URL)
            .then(res => res.json())
            .then((data) => {
                setItems(data.results)
            })
    }, [])

    return (
        <TvShowsDisplay data={items} />
        )
}