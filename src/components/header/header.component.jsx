import React, { useState, useEffect } from 'react';
import { ReactComponent as TomatoLogo } from '../../assets/tomato.svg';
import { ReactComponent as trailerLogo } from '../../assets/TV Show.svg';

import axios from '../../axios';
import requests from '../../requests';

// import Nav from '../nav/nav.component';

import './header.styles.scss'


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
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="header__content">
                <div className="header__content--left">
                    <h1 className="movie__title">{movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div>
                        <div className="right">
                            <TomatoLogo />
                            <p>{movie?.popularity}</p>
                        </div>
                        <p className="overview">{movie?.overview}</p>
                        <button className="btn">
                            <trailerLogo />
                            <span>Watch Trailer</span>
                            </button>
                    </div>

                    <div className="header__content--right">

                    </div>

                </div>

            </div >

        </div >

    )
};

export default Header;