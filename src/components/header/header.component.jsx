import React, { useState, useEffect } from 'react';
import { ReactComponent as TomatoLogo } from '../../assets/tomato.svg';

import axios from '../../axios';
import requests from '../../requests';

import Nav from '../nav/nav.component';


const Header = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(requests.fetchTrending)
            // axios.get(fetchUrl);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchData();
    }, []);

    console.log(movie);

    return (
        <div className="header" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "center center",
            height: "60vh",
            display: "flex",
            flexDirection: "column"
        }}>
            <div className="header__content">
                <div className="header__content--right">
                    <h1>{movie.title}</h1>
                    <div>
                        <div className="right">
                            <TomatoLogo />
                            <p>{movie.popularity}</p>
                        </div>
                        <p className="overview">{movie.overview}</p>
                        <button className="btn">Watch Trailer</button>
                    </div>

                    <div className="header__content--right">

                    </div>

                </div>

            </div >

        </div >

    )
};

export default Header;