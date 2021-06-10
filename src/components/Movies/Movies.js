import React, { useEffect, useState } from "react";
import DiscoverCard from "../Home/Discover/DiscoverCard";

const Movies = () => {
  const [movies, setMovies] = useState({});
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  console.log(movies?.results);

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    setSearch(name);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ec64bda23802d463e4fee78fc15f6166&language=en-US&query=${search}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [search]);
  return (
    <div>
      <div className='flex justify-center my-5'>
        <input
          className='border-2 rounded-sm border-blue-200 focus:ring-2 px-2 focus:ring-blue-400'
          type='text'
          name='name'
          id='name'
          placeholder='Movie name'
          onChange={handleInput}
        />
        <button
          className='bg-blue-400 rounded-sm p-2 mx-2'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className='grid grid grid-cols-1 md:grid-cols-6 gap-y-8 justify-items-center '>
        {movies?.results?.map((movie) => (
          <DiscoverCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
