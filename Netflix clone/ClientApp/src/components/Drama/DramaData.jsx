import React, { useState, useEffect } from 'react';
import { Drama_URL } from '../../ApiAuthentication';
import DramaDisplay from './DramaDisplay';

export default function DramaData() {

    const [item, setItems] = useState([]);

    useEffect(() => {
        fetch(Drama_URL)
            .then(res => res.json())
            .then((data) => {
                setItems(data.results);
                console.log("this is adlt", data.results);
            })
    },[])

    return (
        <DramaDisplay data={item} />
        )
}