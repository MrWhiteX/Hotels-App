import React, { useContext } from "react";
import AuthContext from "../context/authContext";

const Menu = () => {
  const auth = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    auth.login();
  };

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <section className="menu">
      <div className="container menu__wrapper">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Kontakt</a>
          </li>
          <li className="login__class">
            {auth.isAuthenticated ? (
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
