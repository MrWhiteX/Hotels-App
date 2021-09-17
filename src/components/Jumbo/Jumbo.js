import React from "react";

const Jumbo = (props) => {
  return (
    <section className="jumbo">
      <div className="jumbo__bg">{props.children}</div>
    </section>
  );
};

export default Jumbo;
