import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='container max-w-full bg-blue-400 h-16 flex justify-start items-center '>
      <ul className='flex justify-center items-center text-lg mx-20 w-full'>
        <li className='mr-auto'>
          <Link to='/'>Show Talks</Link>
        </li>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li className='ml-5'>
          <Link to='/movies'>Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
