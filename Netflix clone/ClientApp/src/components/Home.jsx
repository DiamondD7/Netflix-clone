
import React, { useState, useEffect } from 'react';
import { Popular_URL } from '../ApiAuthentication';

export default function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [popularMovies, setpopularMovies] = useState([]);
    const [bckDrop, setbckDrop] = useState('');
    const [popmovieTitle, setpopmovieTitle] = useState('');
    const [popOverview, setpopOverview] = useState('');
    const IMG_URL = "https://image.tmdb.org/t/p/w200";
    const BACK_URL = "https://image.tmdb.org/t/p/w500";

    const OpenCloseModal = (itm) => {

        setbckDrop(itm.backdrop_path);
        setpopmovieTitle(itm.title);
        setpopOverview(itm.overview);
        const modal = document.querySelector('.modal');
        const btnsOpenModal = document.querySelectorAll('.show--Modal');
        const overlay = document.querySelector('.overlay');
        const btnCloseModal = document.querySelector('.close--modal');

        for (let i = 0; i < btnsOpenModal.length; i++) {
            btnsOpenModal[i].addEventListener('click', function () {
                modal.classList.remove('hidden');
                overlay.classList.remove('hidden');
            })

            btnCloseModal.addEventListener('click', function () {
                modal.classList.add('hidden');
                overlay.classList.add('hidden');
            })
        }
    }
    const displayPopMovies =
        (
            <div className="movie-lists-div">
                {popularMovies.map((item) => (
                    <div>
                        <button className="show--Modal" key={item.id} onClick={() => OpenCloseModal(item)} ><img src={IMG_URL + item.poster_path} /></button>
                        <div className="modal hidden">
                            <img className="img--modal" src={BACK_URL + bckDrop} />
                            <h2 className="title--modal">{popmovieTitle}</h2>
                            <p className="overview--modal">{popOverview}</p>
                            <button className="close--modal">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="closeModal--icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        );


    useEffect(() => {
        fetch(Popular_URL)
            .then(res => res.json())
            .then((data) => {
                setIsLoaded(true);
                setpopularMovies(data.results);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    console.log(popularMovies);

    return (
        <>
            <div className="header--poster">
                <button className="hum--menu">
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
                        <p>Ragnar Lothbrok is determined to sail west to discover new lands and riches despite an intimidating warning from Earl Heraldson.
                            A Viking who is one of the best-known legendary Norse heroes and notorious as the scourge of Anglo-Saxon England and West Francia.
                        </p>
                    </div>
                    <p className="watch--now"><strong>Watch the series now</strong></p>
                </div>
            </div>



            <p className="heading--popular">Popular on Netflix</p>
            {displayPopMovies}
            <div className="overlay hidden"></div>
        </>
    )

}