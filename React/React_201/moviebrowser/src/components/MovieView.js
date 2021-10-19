import Hero from "./Hero";
import React, { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//https://api.themoviedb.org/3/movie/11?api_key=ed6047d73986167dda2f621081816462&language=en-US

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ed6047d73986167dda2f621081816462&language=en-US`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data);
          setIsLoading(false);
        }, 2);
      });
  }, [id]);

  function renderMovieDetails() {
    //TODO: Create response if img does exist
    const imgUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container">
            <div className="row my-5">
              <div className="col-md-3 position-relative">
                <img
                  src={imgUrl}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
                {
                  movieDetails.vote_average && 
                  <h2>
                    <span class="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-success">
                      {movieDetails.vote_average}
                    </span>
                  </h2>
                }
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovieDetails();
};

export default MovieView;
