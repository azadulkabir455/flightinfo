import Image from "next/image";
import React from "react";

type FlighDeparturePropsType = {
  location: string;
  terminal?: string;
  terminalName: string;
  destination?: boolean;
  breakPointe?: boolean;
};

export default function FlightDeparture(props: FlighDeparturePropsType) {
  const {
    location,
    terminal,
    terminalName,
    destination = false,
    breakPointe = false,
  } = props;
  return (
    <div className="flightDeparture flex">
      <div className="icon">
        {destination ? (
          <Image src="/icons/locationBlue.svg" alt="" width={14} height={20} />
        ) : (
          <Image src="/icons/location.svg" alt="" width={14} height={20} />
        )}
      </div>
      <div
        className={`flightDepartureInfo flex ${breakPointe ? "deepColor" : ""}`}
      >
        <div className="countryName">
          <p>{location}</p>
        </div>
        <div className="terminal">
          <p>
            {terminal && <span>{terminal}:</span>} {terminalName}
          </p>
        </div>
      </div>
    </div>
  );
}
