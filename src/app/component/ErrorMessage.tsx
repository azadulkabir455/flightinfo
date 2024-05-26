import Image from "next/image";
import React from "react";

export default function ErrorMessage() {
  return (
    <div className="errorMessage">
      <Image src="/icons/warning.svg" alt="" width={17} height={17} />
      <p>
        Technical stoppage at Malpensa International Airport (Milano). Before
        booking this flight please check your visa requirements as per your
        nationality
      </p>
    </div>
  );
}
