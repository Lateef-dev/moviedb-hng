import React, { useState, useEffect } from "react";
import { ReactComponent as Favorite } from '../../assets/Favorite.svg';
import { ReactComponent as ImdbLogo } from '../../assets/imdb.svg';
import { ReactComponent as TomatoLogo } from '../../assets/youtube.svg';


import axios from '../../axios'
// import requests from requests
import './Card.styles.scss';

const base_url = "https://image.tmdb.org/t/p/original/"

function Card({ title, fetchUrl }) {

  const [movies, setMovies] = useState([]);

  useEffect(
    () => {

      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
        return request;
      };
      fetchData();

    }, [fetchUrl]
  );
  const displayedMovies = movies.slice(0, 10);

  console.log(displayedMovies);
  return (
    <div className="row">
      <div className="title">
        <h2> {title} </h2>
        <p className="see_more">see more</p>
      </div>
      <div className="movie__posters">
        {
          displayedMovies.map(
            movie => (
              <div className="imageWrapper" key={movie.id}>
                <img className="movie__poster" src={`${base_url}${movie.poster_path}`} alt={movie.original_title}
                />
                <div className="imageTop">
                  <div className="genre"> { } </div>
                  <Favorite />
                </div>
                <div className="imageWrapperBottom">
                  <p>USA, {(movie.release_date.split('-'))[0]}</p>
                  <h2> {movie.title}</h2>
                  <div className="bottomText">
                    <div className="left">
                      <ImdbLogo />
                      <p>{movie.vote_average * 10}/100</p>
                    </div>
                    <div className="right">
                      <TomatoLogo />
                      <p>{movie.popularity}</p>
                    </div>
                  </div>
                </div>
              </div>
            )

          )}
      </div>
    </div >

  )
};

export default Card;


// {
//   /*
// adult
// :
// false
// backdrop_path
// :
// "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
//                     genre_ids
//                     :
//                     (2) [18, 80]
//                     id
//                     :
//                     238
//                     original_language
//                     :
//                     "en"
//                     original_title
//                     :
//                     "The Godfather"
//                     overview
//                     :
//                     "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
//                     popularity
//                     :
//                     106.932
//                     poster_path
//                     :
//                     "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
//                     release_date
//                     :
//                     "1972-03-14"
//                     title
//                     :
//                     "The Godfather"
//                     video
//                     :
//                     false
//                     vote_average
//                     :
//                     8.7
//                     vote_count
//                     :
//                     18627
// */
// }