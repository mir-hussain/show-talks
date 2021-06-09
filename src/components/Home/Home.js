import React, { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState({});
  console.log(movies);
  console.log(movies.results);
  //   console.log(movies?.results?.[0]?.original_title);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>This is movies</h1>
      {movies.results.map((movie) => (
        <p>{movie.original_title}</p>
      ))}
    </div>
  );
};

export default Home;
