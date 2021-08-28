import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const MyHotel = () => {
  const { url } = useRouteMatch();
  return (
    <div className="my__hotel">
      <h1>Dodaj swój hotel do listy</h1>
      <p>Aktualnie nie posiadasz żadnego hotelu.</p>
      <Link to={`${url}/dodaj`}>Dodaj hotel</Link>
    </div>
  );
};

export default MyHotel;
