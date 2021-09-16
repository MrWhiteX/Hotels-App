import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const Searchbar = () => {
  const [term, setTerm] = useState("");

  const history = useHistory();

  const search = () => {
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
        onKeyDown={(e) => e.key === "Enter" && search(term)}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="Szukaj..."
        required
      />
      <button onClick={search}>Szukaj</button>
    </div>
  );
};

export default Searchbar;
