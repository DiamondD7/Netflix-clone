import React, { useState, useEffect } from 'react';
import PopularMoviesData from './components/Popular Movies/PopularMoviesData';
import PopularKids from './components/PopularKids';
import DramaData from './components/Drama/DramaData';
import { Poster_URL } from './ApiAuthentication';

export default function App() {
    const [poster, setPoster] = useState([]);
    const [ranPoster, setRanPoster] = useState([]);
    const [pos, setPos] = useState('');
    const IMG_URL = "https://image.tmdb.org/t/p/original";

    const [openMenu, setopenMenu] = useState(false);

    useEffect(() => {
        fetch(Poster_URL)
            .then(res => res.json())
            .then((data) => {
                setPoster(data.results[Math.floor(Math.random() * data.results.length)]);
            })

    }, [])

    const bod = document.getElementById('body--');
    if (openMenu === true) {
        bod.style.overflow = "hidden";
    } else {
        bod.style.overflow = "scroll";
    }


    return (
        <div className="contain">
            {openMenu &&
                <nav className="Navbar--">
                    <div className="overlay"></div>
                    <button onClick={() => setopenMenu(false)} className="closeHambtn--"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="closeHam--icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    <ul className="ul--">
                        <li>Home</li>
                        <li>Anime</li>
                        <li>Dramas</li>
                        <li>Thriller</li>
                        <li>Horror</li>
                        <li>Kids Movies</li>
                        <li>TV Shows</li>
                        <li>Romantic Movies</li>
                        <li>Comedies</li>
                        <li>Music & Musicals</li>
                        <li>Action & Adventure</li>
                        <li>Award-Winning Films</li>
                        <li>Documentaries</li>
                        <li>Available for Download</li>
                        <li>International Movies</li>
                        <li>Independent Movies</li>
                        <li>Adult Films</li>
                        <li>Scientific Films</li>
                    </ul>
                </nav>
            }


            <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${IMG_URL}${poster.backdrop_path})` }} className="header--poster">
                <button onClick={() => setopenMenu(!openMenu)} className="hum--menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu--icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <img className="netflix--logo" src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"></img>

                <div className="search--div">
                    <button className="search--button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search--icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>

                    <button className="dots--button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dots--icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </button>
                </div>


                <div className="summary--div">
                    <div>
                        <h2 className="poster--title">{poster.title}</h2>
                    </div>

                    <button className="summary--buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className="summary--buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>



                    <div className="poster--summary">
                        <p>
                            {poster.overview}
                        </p>
                    </div>
                    <p className="watch--now"><strong>Watch the series now</strong></p>
                </div>
            </div>


            <div>
                <p className="heading--popular">Popular on Netflix</p>
                <PopularMoviesData />
            </div>

            <div>
                <p className="heading--popular">Popular Kids Movies</p>
                <PopularKids />
            </div>

            <div>
                <p className="heading--popular">Popular Drama in The Past Year</p>
                <DramaData />
            </div>
        </div>
    )
}