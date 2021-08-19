import React from "react";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon";
import Hotel from "../Hotel/Hotel";

const Hotels = ({ hotels, loading }) => {
  return (
    <>
      <section className="container hotels">
        <h1>Najlepsze oferty</h1>
        <span>Odkrywaj nowe miejsca i ciesz się życiem</span>

        {loading ? <LoadingIcon /> : <Hotel hotels={hotels} />}
      </section>
    </>
  );
};

export default Hotels;
