import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const Searchbar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const history = useHistory();

  const searchHandler = () => {
    history.push(`/wyszukaj/${term}`);
  };
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="searchbar">
      <h1>Pozwól nam zabrać Cię w</h1>
      <h2>najlepsze wymarzone miejsca!</h2>
      <input
        ref={inputRef}
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
