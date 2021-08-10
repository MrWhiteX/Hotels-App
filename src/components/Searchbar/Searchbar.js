import React from "react";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <h1>Pozwól nam zabrać Cię w</h1>
      <h2>najlepsze wymarzone miejsca!</h2>
      <input type="text" placeholder="Szukaj..." required />
      <button>Szukaj</button>
    </div>
  );
};

export default Searchbar;
