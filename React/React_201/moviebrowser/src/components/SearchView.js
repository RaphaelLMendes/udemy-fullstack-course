import { Link } from "react-router-dom";
import Hero from "./Hero";

//tmdbpassword

// TMDB API KEY = ed6047d73986167dda2f621081816462

// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=ed6047d73986167dda2f621081816462&language=en-US&query=star%20wars&page=1&include_adult=false

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  const fillerUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

  function renderIMG() {
    if (movie.poster_path) {
      return (
        <img
          src={posterUrl}
          className="card-img-top image-fluid"
          alt={movie.original_title}
        />
      );
    } else {
      return (
        <img
          src={fillerUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
      );
    }
  }

  return (
    <div className="col-lg-3 col-md-6 col-12 my-4">
      <div className="card">
        {/* <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        /> */}
        {renderIMG()}
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `Your are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      {searchResults.length !== 0 ? (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row"><h2>There are no movies by that name</h2></div>
        </div>
      )}

      {/* {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )} */}
    </>
  );
};

export default SearchView;
