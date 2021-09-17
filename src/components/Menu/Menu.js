import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Menu = () => {
  const [auth, setAuth] = useAuth();

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
  };

  return (
    <section className="menu">
      <div className="container menu__wrapper">
        <ul>
          <li>
            <Link to="/" className="menuItemActive">
              Home
            </Link>
          </li>

          {auth ? <Link to="/profil">Mój profil</Link> : null}

          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li className="login__class">
            {auth ? (
              <a href="/#" onClick={logout}>
                Wyloguj
              </a>
            ) : (
              <Link to="/zaloguj">Zaloguj</Link>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
