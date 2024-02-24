import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-[#F4F5F8] w-full lg:w-96 h-12 lg:h-10 flex items-center rounded-full"
    >
      <div className="w-full flex items-center px-3">
        <FiSearch size={27} color="#7E8494" />
        <input
          type="search"
          placeholder="Search for Order"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-3 outline-0 w-full h-4 bg-transparent placeholder:text-sm placeholder:font-light"
        />
      </div>
    </form>
  );
};

export default SearchOrder;
