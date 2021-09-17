import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer__wrapper">
        <div className="footer__wrapper--info">
          <span>Polityka Prywatności</span>
          <span>Regulamin</span>
          <Link to="/kontakt">Kontakt</Link>
        </div>
        <div className="footer__wrapper--copyright">
          <span>Copyright © FajnyHotelik.pl. All Rights Reserved</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
