import React, {useState, useEffect} from 'react';

const DramaDisplay = (props) => {
    const [itemData, setItemData] = useState([]);

    const [bDrop, setbDrop] = useState('');
    const [movieTitle, setmovieTitle] = useState('');
    const [Overview, setOverview] = useState('');
    const IMG_URL = "https://image.tmdb.org/t/p/w200";
    const BACK_URL = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        setItemData(props.data)
    }, [props])


    return (
        <div>
            <div className="movie-lists-div">
                {itemData.map((item) => (
                    <div key={item.id}>
                        <button className="show--Modal" type="button"><img src={IMG_URL + item.poster_path} /></button>                  
                    </div>
                ))}

            </div>
        </div>
        )
}


export default DramaDisplay;