import React from "react";
import Hotel from "../Hotel/Hotel";

const Hotels = ({ hotels }) => {
  return (
    <>
      <section className="container hotels">
        <h1>Najlepsze oferty</h1>
        <span>Odkrywaj nowe miejsca i ciesz się życiem</span>

        <Hotel hotels={hotels} />
      </section>
    </>
  );
};

export default Hotels;
