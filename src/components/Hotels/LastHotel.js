import React from "react";

const LastHotel = (props) => {
  const { lastHotel } = props;

  return (
    <>
      <div className="container last__hotel">
        <span className="last_seen">
          Ostatnio oglądałeś ten hotel. Wciąz jesteś zainteresowany?
        </span>
        <div className="last__hotel--description">
          <div className="last__hotel--name">
            <span>{lastHotel.name}</span>
            <span>{lastHotel.city}</span>
          </div>
          <div className="last__hotel--confirm">
            <button>Tak!</button>
            <button onClick={props.onRemove}>Nie</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastHotel;
