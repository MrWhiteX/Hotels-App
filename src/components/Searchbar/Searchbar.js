import React, { useState } from "react";

const Searchbar = () => {
  const [term, setTerm] = useState();
  const searchHandler = () => {
    console.log("szukaj");
  };

  return (
    <div className="searchbar">
      <h1>Pozwól nam zabrać Cię w</h1>
      <h2>najlepsze wymarzone miejsca!</h2>
      <input type="text" placeholder="Szukaj..." required />
      <button onClick={searchHandler}>Szukaj</button>
    </div>
  );
};

export default Searchbar;
