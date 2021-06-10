import React, { useEffect, useState } from "react";
import DiscoverCard from "./DiscoverCard";

const Discover = () => {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ec64bda23802d463e4fee78fc15f6166&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1 className='text-center my-5 text-3xl'>
        Discover new movies{" "}
      </h1>
      <div className='grid grid grid-cols-1 md:grid-cols-6 gap-y-8 justify-items-center '>
        {movies?.results?.map((movie) => (
          <DiscoverCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
