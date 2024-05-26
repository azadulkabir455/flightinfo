import React from "react";
type FlightHeaderProps = {
  fromPlace: string;
  toPlace: string;
  time: string;
  stop: string;
  hours: string;
};
export default function FlightHeader(props: FlightHeaderProps) {
  const { fromPlace, toPlace, time, stop, hours } = props;
  return (
    <div className="flightHeader flex">
      <div className="details flex">
        <span className="process">1</span>
        <div className="placeTimeInfo">
          <h2>
            {fromPlace}
            <span>→</span>
            {toPlace}
          </h2>
          <ul>
            <li>Round Trip</li>
            <li>{time}</li>
            <li>{stop}</li>
          </ul>
        </div>
      </div>
      <div className="hour">
        <p>{hours}</p>
      </div>
    </div>
  );
}
