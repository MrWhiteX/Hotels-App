import React from "react";
import Searchbar from "../Searchbar/Searchbar";

const Jumbo = (props) => {
  return (
    <section className="jumbo">
      <div className="jumbo__bg">{props.children}</div>
    </section>
  );
};

export default Jumbo;
