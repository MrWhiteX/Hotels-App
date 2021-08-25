import React from "react";
import { useParams } from "react-router-dom";

const Search = (props) => {
  const { term } = useParams();

  //   const searchHandler = (term) => {
  //     const newHotels = [...allHotels].filter((x) =>
  //       x.name.toLowerCase().includes(term.toLowerCase())
  //     );
  //   };
  return (
    <div>
      <h2>Wyniki dla frazy "{term}"</h2>
    </div>
  );
};

export default Search;
