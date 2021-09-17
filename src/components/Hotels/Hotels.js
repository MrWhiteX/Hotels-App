import React from "react";
import Hotel from "../Hotel/Hotel";
import LastHotel from "./LastHotel";

const Hotels = (props) => {
  const { hotels, onOpen, onRemove, lastHotel } = props;
  return (
    <>
      <section className="container hotels">
        <h1>Najlepsze oferty</h1>
        <span>Odkrywaj nowe miejsca i ciesz się życiem</span>
        {lastHotel ? (
          <LastHotel lastHotel={lastHotel} onRemove={onRemove} />
        ) : null}
        <Hotel hotels={hotels} onOpen={onOpen} />
      </section>
    </>
  );
};

export default Hotels;
