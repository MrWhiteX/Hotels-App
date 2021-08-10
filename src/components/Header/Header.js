import React from "react";

const Header = () => {
  return (
    <section className="col-12 header">
      <div className="container header__wrapper ">
        <div className="header__logo">
          <span>FajnyHotelik.pl</span>
        </div>
        <div className="header__call">
          <span>
            Zadzwoń do nas:{" "}
            <span className="header__call--number">+48 123 456 789</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
