import Image from "next/image";
import React from "react";
import ErrorMessage from "./ErrorMessage";

type flightInfoPropsType = {
  locationName: string;
  duration: string;
  firstTime: string;
  firstDate: string;
  secondTime: string;
  secondDate: string;
  airlines: string;
  flightNo: string;
  flightName: string;
  classType: string;
  warning?: boolean;
};

export default function FlightInfo(props: flightInfoPropsType) {
  const {
    locationName,
    duration,
    firstTime,
    firstDate,
    secondTime,
    secondDate,
    airlines,
    flightNo,
    flightName,
    classType,
    warning,
  } = props;
  return (
    <div className="flightInfo">
      <div className="sideLine">
        <Image src="/icons/flighticon.svg" alt="" width={24} height={24} />
        <div className="line"></div>
      </div>
      <div className="infoContainer">
        <div className="timeInfo flex">
          <div>
            <h3>{locationName}</h3>
            <p>{duration}</p>
          </div>
          <div>
            <h3>{firstTime}</h3>
            <p>{firstDate}</p>
          </div>
          <div>
            <h3>{secondTime}</h3>
            <p>{secondDate}</p>
          </div>
        </div>
        <div className="flightDetails flex">
          <div>
            <p className="flightName">{airlines}</p>
            <p>Flight no : {flightNo}</p>
          </div>
          <div>
            <p>{flightName}</p>
            <p>
              Class: <span> {classType}</span>
            </p>
          </div>
        </div>
        {warning ? <ErrorMessage /> : ""}
      </div>
    </div>
  );
}
