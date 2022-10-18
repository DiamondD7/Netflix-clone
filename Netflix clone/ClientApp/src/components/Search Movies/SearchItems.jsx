import React, { useState, useEffect } from 'react';
import { Search_URL } from '../../ApiAuthentication';
import App from '../../App';

const SearchItems = (props) => {
    const [searchedItems, setSearchItems] = useState([]);
    const [goBack, setGoBack] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [searchMovieTitle, setSearchMovieTitle] = useState('');
    const [searchBDrop, setSearchBDrop] = useState('');
    const [searchOverview, setSearchOverview] = useState('');

    const IMG_URL2 = "https://image.tmdb.org/t/p/w200";


    useEffect(() => {
        fetch(Search_URL + '&query=' + props.searchText)
            .then(res => res.json())
            .then((data) => {
                setSearchItems(data.results);
                console.log(data.results);
            })
    }, [])

    function OpenModal(itm) {
        setOpenModal(true)
        setSearchMovieTitle(itm.title)
        setSearchBDrop(itm.backdrop_path)
        setSearchOverview(itm.overview)
    }

    const backSearchButton = () => {
        setSearchItems([]);
        setGoBack(true);
    }


    return (
        <>
            {goBack ? <App /> :
                <div className="search--container">
                    <div className="search-lists-div">
                        {searchedItems.filter((items) => {
                            if (props.searchText === '') {
                                return items;
                            } else if (items.title.toLowerCase().includes(props.searchText.toLowerCase())) {
                                return items;
                            }
                        }).map((items) =>
                            <div key={items.id}>
                                <button className="show--Modal" type="button" onClick={() => OpenModal(items)}><img className="movieimage--grid" src={IMG_URL2 + items.poster_path} /></button>
                            </div>
                        )}
                    </div>
                    <button className="back-btn-close" onClick={backSearchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search--back--icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            }
        </>
    )
}

export default SearchItems;