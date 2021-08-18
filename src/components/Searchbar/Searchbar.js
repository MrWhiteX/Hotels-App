import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const searchHandler = () => {
    onSearch(term);
  };

  return (
    <div className="searchbar">
      <h1>Pozwól nam zabrać Cię w</h1>
      <h2>najlepsze wymarzone miejsca!</h2>
      <input
        value={term}
        onKeyDown={(e) => e.key === "Enter" && onSearch(term)}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="Szukaj..."
        required
      />
      <button onClick={searchHandler}>Szukaj</button>
    </div>
  );
};

export default Searchbar;
