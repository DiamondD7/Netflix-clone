import React from 'react';

export default function Home() {
    return (
        <>
            <div className="header--poster">
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
        </>
        )
}