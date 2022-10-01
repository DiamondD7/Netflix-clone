import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const DramaDisplay = (props) => {
    const [itemData, setItemData] = useState([]);

    const [bDrop, setbDrop] = useState('');
    const [movieTitle, setmovieTitle] = useState('');
    const [Overview, setOverview] = useState('');
    const IMG_URL = "https://image.tmdb.org/t/p/w200";
    const BACK_URL = "https://image.tmdb.org/t/p/w500";

    const [openModal, setopenModal] = useState(false);
    const [trailerUrl, settrailerUrl] = useState('');

    function OpenModal(itm) {
        setopenModal(true)
        setbDrop(itm.backdrop_path)
        setmovieTitle(itm.title)
        setOverview(itm.overview)
    }

    function CloseModal() {
        setopenModal(false)
        settrailerUrl('')
    }

    const opts = {
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleVideoClick = (movie) => {

        if (trailerUrl) {
            settrailerUrl('')
        } else {
            movieTrailer(movieTitle)
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    settrailerUrl(urlParams.get('v'))
                }).catch(error => console.log(error))
        }
    }

    useEffect(() => {
        setItemData(props.data)
    }, [props])


    return (
        <div>
            <div className="movie-lists-div">
                {itemData.map((item) => (
                    <div key={item.id}>
                        <div>
                            <button className="show--Modal" type="button" onClick={() => OpenModal(item)}><img className="movieimage--grid" src={IMG_URL + item.poster_path} /></button>
                        </div>

                        {openModal ?
                            <div className="modal">
                                {trailerUrl === '' ?
                                    <img className="img--modal" src={BACK_URL + bDrop} alt={item.title} />
                                    :
                                    <Youtube
                                        videoId={trailerUrl}
                                        opts={opts}
                                    />
                                }

                                {trailerUrl === '' ?
                                    < button className="btnPlay" onClick={() => handleVideoClick(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btnPlayModal--icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>

                                    </button>
                                    : ""
                                }
                                <h2 className="title--modal">{movieTitle}</h2>
                                <p className="overview--modal">{Overview}</p>
                                <button className="close--modal" onClick={CloseModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="closeModal--icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            : ""
                        }
                    </div>

                ))}

                {openModal ?

                    <div className="overlay"></div>
                    : ""
                }

            </div>
        </div >
    )
}


export default DramaDisplay;