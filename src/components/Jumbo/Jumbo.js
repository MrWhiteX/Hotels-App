import React from "react";
import Searchbar from "../Searchbar/Searchbar";

const Jumbo = ({ onSearch }) => {
  return (
    <section className="jumbo">
      <div className="jumbo__bg">
        <Searchbar onSearch={onSearch} />
      </div>
    </section>
  );
};

export default Jumbo;
