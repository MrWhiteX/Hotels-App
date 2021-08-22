import React from "react";

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
                  <span>{hotel.price}</span>
                </div>
                <span className="single__hotel--city">{hotel.city}</span>
                <button onClick={() => clickHandler(hotel)}>Pokaż</button>
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
