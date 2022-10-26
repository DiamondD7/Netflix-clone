import React, { useState, useEffect } from 'react';
import { War_URL } from '../../ApiAuthentication';

const War = () => {

    const [items, setItems] = useState([]);
    const IMG_URL2 = "https://image.tmdb.org/t/p/w200";

    useEffect(() => {
        fetch(War_URL)
            .then(res => res.json())
            .then((data) => {
                setItems(data.results);
            })
    }, [])

    return (
        <div>
            <div className="search--container">
                <div className="search-lists-div">
                    {items.map((item) =>
                        <div key={item.id}>
                            <button className="show--Modal" type="button"><img className="movieimage--grid" src={IMG_URL2 + item.poster_path} /></button>
                        </div>
                    )}

                </div>
                <button className="back-btn-close">
                    <a className="btn-empty" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search--back--icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default War;