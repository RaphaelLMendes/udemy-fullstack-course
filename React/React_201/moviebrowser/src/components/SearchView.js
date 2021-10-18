import Hero from "./Hero";

//tmdbpassword

// TMDB API KEY = ed6047d73986167dda2f621081816462

// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=ed6047d73986167dda2f621081816462&language=en-US&query=star%20wars&page=1&include_adult=false

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="col-lg-3 col-md-6 col-12 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <a href="go" className="btn btn-primary">
            Show details
          </a>
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
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
