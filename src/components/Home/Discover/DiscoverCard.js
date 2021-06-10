import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DiscoverCard.css";

AOS.init();

const DiscoverCard = ({ movie }) => {
  console.log(movie);
  const { poster_path, original_title } = movie;

  const IMG_API = "https://image.tmdb.org/t/p/w200";

  return (
    <div
      data-aos='fade-up'
      className='cursor-pointer '
      style={{ width: "200px" }}
    >
      <div style={{ height: "300px" }}>
        <img
          className='h-full rounded-t-lg'
          src={IMG_API + poster_path}
          alt=''
        />
      </div>
      <div className='bg-blue-200 h-20 flex justify-center items-center text-center rounded-b-lg'>
        <h1>{original_title}</h1>
      </div>
    </div>
  );
};

export default DiscoverCard;
