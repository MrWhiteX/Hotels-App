import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../axios";
import { objectToArrayWithId } from "../../../helpers/objects";

const MyHotel = () => {
  const [auth] = useAuth();
  const { url } = useRouteMatch();
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const res = await axios.get("/hotels.json");
      const newHotel = objectToArrayWithId(res.data).filter(
        (hotel) => hotel.userId === auth.userId
      );

      setHotels(newHotel);
    } catch (ex) {
      console.log(ex.response);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/hotels/${id}.json`);
      setHotels(hotels.filter((x) => x.id !== id));
    } catch (ex) {
      console.log(ex.response);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="my__hotel">
      <h1>Dodaj swój hotel do listy</h1>

      {hotels ? (
        <div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Opcje</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr>
                  <td style={{ fontSize: 20 }}>{hotel.name}</td>
                  <td>
                    <Link
                      to={`/profil/hotele/edytuj/${hotel.id}`}
                      className="table__button--edit"
                    >
                      Edytuj
                    </Link>

                    <button
                      className="table__button--delete"
                      onClick={() => deleteHandler(hotel.id)}
                    >
                      Usun
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Aktualnie nie posiadasz żadnego hotelu.</p>
      )}

      <Link to={`${url}/dodaj`} className="my__hotel--addbutton">
        Dodaj hotel
      </Link>
    </div>
  );
};

export default MyHotel;
