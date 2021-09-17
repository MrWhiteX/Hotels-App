import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import axios from "../../axios";

const SingleHotel = () => {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const setTitle = useWebsiteTitle();

  const fetchHotel = async () => {
    try {
      const res = await axios.get(`/hotels/${id}.json`);
      setHotel(res.data);
      setTitle(`${res.data.name}`);
    } catch (ex) {
      console.log(ex.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHotel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingIcon />;
  return (
    <div className="container hotel__moreinfo">
      <h1 className="hotel__moreinfo--title">{hotel.name}</h1>
      <div className="row1-container">
        {/* <div class="box box-down cyan">
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </div> */}

        {/* <div class="box red">
          <h2>Opis</h2>
          <p>{hotel.description}</p>
          <img
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
          />
        </div> */}

        {/* <div class="box box-down blue">
          <h2>Calculator</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-calculator.svg"
            alt=""
          />
        </div> */}
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Opis</h2>
          <p className="box__description">
            Obiekt Góralska Osada Karpacz - Domki Lux położony jest w
            miejscowości Karpacz w regionie dolnośląskie i oferuje bezpłatne
            WiFi, sprzęt do grillowania, ogród oraz bezpłatny prywatny parking.
            Odległość ważnych miejsc od obiektu: Western City – 4,2 km.
            Wszystkie opcje zakwaterowania wyposażono w sofę i telewizor z
            płaskim ekranem z dostępem do kanałów satelitarnych. W każdej opcji
            do dyspozycji Gości jest też część wypoczynkowa oraz kuchnia z
            pełnym wyposażeniem i jadalnią. Wyposażenie obejmuje również
            lodówkę, piekarnik, płytę kuchenną i czajnik. Obiekt dysponuje
            tarasem. W obiekcie Goście mogą grać w bilard. Okolica cieszy się
            popularnością wśród miłośników trekkingu i narciarstwa. Odległość
            ważnych miejsc od obiektu: Świątynia Wang – 5 km, Tor Saneczkowy –
            2,1 km. Najbliższe lotnisko, Lotnisko im. Mikołaja Kopernika we
            Wrocławiu, znajduje się 87 km od obiektu goralska osada domki.
            Goście mogą skorzystać z płatnego transferu lotniskowego. Parom
            bardzo się podoba ta lokalizacja – za pobyt dla 2 osób oceniają ją
            na 8,5 Mówimy w Twoim języku!
          </p>

          <p>Ilość dostępnych pokoi: {hotel.rooms}</p>
          <p>Cena za dobę: {hotel.price} zł</p>
          <p>
            Udogodnienia: <div>{hotel.features[0]}</div>
            <div>{hotel.features[1]}</div>
            <div>{hotel.features[2]}</div>
            <div>{hotel.features[3]}</div>
            <div>{hotel.features[4]}</div>
          </p>

          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
