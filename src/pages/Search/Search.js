import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { objectToArrayWithId } from "../../helpers/objects";
import axios from "../../axios";
import Jumbo from "../../components/Jumbo/Jumbo";
import Searchbar from "../../components/Searchbar/Searchbar";
import Hotels from "../../components/Hotels/Hotels";

const Search = (props) => {
  const { term } = useParams();
  const [hotels, setHotels] = useState([]);
  const [noHotel, setNoHotel] = useState(false);

  const search = async () => {
    try {
      const res = await axios.get("/hotels.json");
      const copyHotels = objectToArrayWithId(res.data);

      setHotels(objectToArrayWithId(res.data));

      const newHotel = copyHotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(term.toLowerCase())
      );

      setHotels(newHotel);

      if (newHotel.length === 0) {
        setHotels(objectToArrayWithId(res.data));
      }
    } catch (ex) {
      console.log(ex.response);
    }
  };

  useEffect(() => {
    search();
  }, [term]);

  return (
    <>
      <Jumbo>
        <Searchbar />
      </Jumbo>
      <div>
        <Hotels hotels={hotels} />
      </div>
    </>
  );
};

export default Search;
