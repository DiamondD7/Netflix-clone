import React from 'react';
import Home from './components/Home';

export default function App() {
    let component, active;
    switch (window.location.pathname) {
        case "/":
            component = <Home />;
            active = "item active";
            break;
        default:
            console.log("this is defaut");
            break;
    }
    return (
        <>
            <div className="ui pointing menu">
                <a className="item" href="/">
                    Home
                </a>
            </div>

            {component}
        </>
        )
}