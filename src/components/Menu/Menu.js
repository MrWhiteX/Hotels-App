import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Menu = () => {
  const [auth, setAuth] = useAuth();

  const login = (e) => {
    e.preventDefault();
    setAuth(true);
  };

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
  };
  return (
    <section className="menu">
      <div className="container menu__wrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">Kontakt</a>
          </li>
          <li className="login__class">
            {auth ? (
              <a href="#" onClick={logout}>
                Wyloguj
              </a>
            ) : (
              <a href="#" onClick={login}>
                Zaloguj
              </a>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
