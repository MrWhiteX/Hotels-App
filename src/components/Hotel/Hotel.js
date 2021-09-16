import React from "react";
import { Link } from "react-router-dom";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const Hotel = (props) => {
  const { hotels, onOpen } = props;

  const clickHandler = (hotel) => {
    onOpen(hotel);
  };

  return (
    <div className="col-12">
      <div className="hotels__wrapper">
        {hotels.map((hotel) => {
          return (
            <div className="single__hotel" key={hotel.id}>
              <div className="single__hotel--img"></div>
              <div className="single__hotel--description">
                <div className="single__hotel--info">
                  <span>{hotel.name}</span>
                  <span>{hotel.price} zł/doba</span>
                </div>
                <span className="single__hotel--city">{hotel.city}</span>
                <Link to={`/hotele/${hotel.id}`}>Pokaż</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.hotels === nextProps.hotels;
};

export default React.memo(Hotel, areEqual);
