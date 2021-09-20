import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import MyHotel from "./MyHotels/MyHotel";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Profile = () => {
  const { url } = useRouteMatch();
  const setTitle = useWebsiteTitle("Profil");

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
              <Link to={`${url}`}>Profil</Link>
            </li>
            <li>
              <Link to={`${url}/hotele`}>Hotele</Link>
            </li>
            <li>
              <Link to={`${url}`}>Cosik jeszcze</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profile__wrapper">
        <Switch>
          <Route path={`${url}/hotele`} component={MyHotel} />
          <Route path={`${url}`} component={ProfileDetails} />
        </Switch>
      </div>
    </section>
  );
};

export default Profile;
