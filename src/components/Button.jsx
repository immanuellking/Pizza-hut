import React from "react";

const Button = ({ children, type, onClick }) => {
  const base =
    " text-sm rounded-full font-semibold capitalize tracking-wide transition-colors duration-300 ";
  const styles = {
    round: `${base}bg-gray-400 text-stone-800 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed px-2 py-2`,
    primary: `${base} bg-black text-white px-12 py-3`,
    secondary: `${base} bg-black text-white px-20 py-4 text-lg`,
  };
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// F4F5F8
