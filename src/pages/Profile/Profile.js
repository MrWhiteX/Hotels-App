import React from "react";
import PersonIcon from "@material-ui/icons/Person";

const Profile = () => {
  return (
    <section className="profile container">
      <div className="profile__title breadcrumb">
        <PersonIcon
          style={{ fontSize: 30, marginLeft: "7px", color: "#FF9F1C" }}
        />
        <h1>Mój profil</h1>
      </div>

      <div className="profile__menu">
        <nav className="skew-menu">
          <ul>
            <li>
              <a href="#">Profil</a>
            </li>
            <li>
              <a href="#">Hotele</a>
            </li>
            <li>
              <a href="#">Cosik jeszcze</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Profile;
