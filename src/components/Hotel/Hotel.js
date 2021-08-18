import React from "react";

const Hotel = ({ hotels }) => {
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
                  <span>{hotel.price}</span>
                </div>
                <span className="single__hotel--city">{hotel.city}</span>
                <button>Pokaż</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
