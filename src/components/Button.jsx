import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, onClick, to }) => {
  const base =
    " text-sm rounded-full font-semibold capitalize tracking-wide transition-colors duration-300 ";
  const styles = {
    round: `${base}bg-gray-400 text-stone-800 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed p-1.5 sm:px-2 sm:py-2`,
    primary: `${base} bg-black text-white p-2 sm:px-12 sm:py-3`,
    secondary: `${base} bg-black text-white px-20 py-4 text-lg`,
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;

// F4F5F8
