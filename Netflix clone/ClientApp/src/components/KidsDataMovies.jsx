import React, { useState, useEffect } from 'react';


export default function KidsDataMovies(props) {
    const [kidsMovies, setkidsMovies] = useState([]);
    const [bckDrop, setbckDrop] = useState('');
    const [movieTitle, setmovieTitle] = useState('');
    const [Overview, setOverview] = useState('');

    const [didOpen, setdidOpen] = useState(false);
    const IMG_URL = "https://image.tmdb.org/t/p/w200";
    const BACK_URL = "https://image.tmdb.org/t/p/w500";

    const OpenClose = (itm) => {

        setbckDrop(itm.backdrop_path);
        setmovieTitle(itm.title);
        setOverview(itm.overview);

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


    console.log(bckDrop);

    useEffect(() => {
        setkidsMovies(props.data);

    }, [props])

    return (
        <div>
            <div className="movie-lists-div">
                {kidsMovies.map((items) => (
                    <div key={items.id}>
                        <button className="show--Modal" onClick={() => OpenClose(items)}><img src={IMG_URL + items.poster_path} /></button>

                        <div className="modal hidden">
                            <img className="img--modal" src={BACK_URL + bckDrop} />
                            <h2 className="title--modal">{movieTitle}</h2>
                            <p className="overview--modal">{Overview}</p>
                            <button className="close--modal">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="closeModal--icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
