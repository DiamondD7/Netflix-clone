import React from 'react';

import ActionAdventure from './components/Routes/ActionAdventure';
import DramaPage from './components/Routes/DramaPage';
import Home from './components/Routes/Home';
import Animation from './components/Routes/Animation';
import Thriller from './components/Routes/Thriller';
import Horror from './components/Routes/Horror';
import Family from './components/Routes/Family';
import TvShows from './components/Routes/TvShows';
import Music from './components/Routes/Music';
import Documentary from './components/Routes/Documentary';
import Comedy from './components/Routes/Comedy';
import Romance from './components/Routes/Romance';
import War from './components/Routes/War';
import SciFi from './components/Routes/SciFi';
import History from './components/Routes/History';
import Crime from './components/Routes/Crime';


export default function App() {
    let component;

    switch (window.location.pathname) {
        case '/':
            component = <Home />;
            break;
        case '/ActionAdventure':
            component = <ActionAdventure />;
            break;
        case '/DramaPage':
            component = <DramaPage />;
            break;
        case '/Animation':
            component = <Animation />;
            break;
        case '/Thriller':
            component = <Thriller />
            break;
        case '/Horror':
            component = <Horror />
            break;
        case '/Family':
            component = <Family />
            break;
        case '/TvShows':
            component = <TvShows />
            break;
        case '/Music':
            component = <Music />
            break;
        case '/Romance':
            component = <Romance />
            break;
        case '/Documentary':
            component = <Documentary />
            break;
        case '/Comedy':
            component = <Comedy />
            break;
        case '/War':
            component = <War />
            break;
        case '/SciFi':
            component = <SciFi />
            break;
        case '/History':
            component = <History />
            break;
        case '/Crime':
            component = <Crime />
            break;
        default:
            console.log('error');
            break;
    }


    return (
        <div>
            {component}
        </div>
    )
}