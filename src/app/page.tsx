import Image from "next/image";
import styles from "./page.module.css";
import BredCrumbs from "./component/BredCrumbs";
import FlightHeader from "./component/FlightHeader";
import FlightDeparture from "./component/FlightDeparture";
import FlightInfo from "./component/FlightInfo";

export default function Home() {
  return (
    <>
      <BredCrumbs />
      <div className="mainContainer">
        <FlightHeader
          toPlace="JFK"
          fromPlace="DAC"
          time="25 Mar - 4 Apr 2023"
          stop="1 Stop"
          hours="33h 20m"
        />
        <FlightDeparture
          location="Departure from Dhaka"
          terminal="Terminal 1"
          terminalName="Hazrat Shahjalal International Airport"
        />
        <FlightInfo
          locationName="DAC - DXB"
          duration="12 hr 20 min"
          firstTime="07:30 PM"
          firstDate="28 Mar, Friday"
          secondTime="08:50 AM"
          secondDate="29 Mar, Saturday"
          airlines="Turkish Airlines"
          flightNo="TUR467"
          flightName="Airbus Industrie 737-800-738"
          classType="ECONOMY-Y (O)"
          warning={true}
        />
        <FlightDeparture
          location="Layover at Dubai: 12 hr 20 min "
          terminalName="Dubai International Airport"
          breakPointe={true}
        />
         <FlightInfo
          locationName="DAC - DXB"
          duration="12 hr 20 min"
          firstTime="07:30 PM"
          firstDate="28 Mar, Friday"
          secondTime="08:50 AM"
          secondDate="29 Mar, Saturday"
          airlines="Turkish Airlines"
          flightNo="TUR467"
          flightName="Airbus Industrie 737-800-738"
          classType="ECONOMY-Y (O)"
        />
        <FlightDeparture
          location="Destination at New York"
          terminal="Terminal 4"
          terminalName="John F Kennedy International Airport"
          destination={true}
        />
      </div>
    </>
  );
}
