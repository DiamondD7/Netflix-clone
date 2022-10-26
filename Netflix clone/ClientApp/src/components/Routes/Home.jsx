
import React, { useState, useEffect } from 'react';
import PopularMoviesData from '../Popular Movies/PopularMoviesData';
import PopularKids from '../PopularKids';
import DramaData from '../Drama/DramaData';
import ShowingNowMovies from '../ShowingNow/ShowingNowMovies';
import SearchItems from '../Search Movies/SearchItems';
import TvShowsData from '../TV Shows/TvShowsData';
import { Poster_URL } from '../../ApiAuthentication';

import { Search_URL } from '../../ApiAuthentication';


export default function Home() {
    const [poster, setPoster] = useState([]);
    const IMG_URL = "https://image.tmdb.org/t/p/original";

    const [openMenu, setopenMenu] = useState(false);
    const [openSearch, setopenSearch] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [Searched, setSearched] = useState(false);

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


    const searchActive = () => {
        setSearched(true);
    }


    return (
        <>
            {Searched ? <SearchItems searchText={searchTerm} /> :
                <div className="contain">
                    {openMenu &&
                        <nav className="Navbar--">
                            <div className="overlay"></div>
                            <button onClick={() => setopenMenu(!openMenu)} className="closeHambtn--"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="closeHam--icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                            <ul className="ul--">
                                <li><a className="btn-empty" href="/">Home</a></li>
                                <li><a className="btn-empty" href="/Animation">Animation</a></li>
                                <li><a className="btn-empty" href="/DramaPage">Dramas</a></li>
                                <li><a className="btn-empty" href="/Thriller">Thriller</a></li>
                                <li><a className="btn-empty" href="/Horror">Horror</a></li>
                                <li><a className="btn-empty" href="/Family">Kid's Movies</a></li>
                                <li><a className="btn-empty" href="/TvShows">TV Shows</a></li>
                                <li><a className="btn-empty" href="/Romance">Romance</a></li>
                                <li><a className="btn-empty" href="/Comedy">Comedy</a></li>
                                <li><a className="btn-empty" href="/Music">Music & Musicals</a></li>
                                <li><a className="btn-empty" href="/ActionAdventure">Action & Adventure</a></li>
                                <li><a className="btn-empty" href="/Documentary">Documentaries</a></li>
                                <li><a className="btn-empty" href="/War">War</a></li>
                                <li><a className="btn-empty" href="/SciFi">Scientific Films</a></li>
                                <li><a className="btn-empty" href="/History">History</a></li>
                                <li><a className="btn-empty" href="/Crime">Crime</a></li>
                                <li>Award-Winning</li>
                                <li>Available for Download</li>
                                <li>International Movies</li>
                            </ul>
                        </nav>
                    }

                    {openSearch &&

                        <div className="zzzz">
                            <div className="overlay"></div>
                            <div className="search--div--activate">
                                <button className="btn-search-icon" onClick={searchActive}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search--icon--activated">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                                <input className="search--input" type="search" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
                                <button className="back-btn-close" onClick={() => setopenSearch(!openSearch)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search--back--icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </button>


                            </div>



                        </div>
                    }




                    <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${IMG_URL}${poster.backdrop_path})` }} className="header--poster">
                        <button onClick={() => setopenMenu(!openMenu)} className="hum--menu">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu--icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        <img className="netflix--logo" src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"></img>

                        <div className="search--div">
                            <button className="search--button" onClick={() => setopenSearch(!openSearch)}>
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
                        <p className="heading--popular">Showing in Cinemas</p>
                        <ShowingNowMovies />
                    </div>

                    <div>
                        <p className="heading--popular">TV Shows</p>
                        <TvShowsData />
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
            }

        </>
    )
}