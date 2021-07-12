import React from "react";
import sign_video from "../assets/SIGNATURE.mp4";

const Header = () => {
  return (
    <div>
      <video src={sign_video} autoPlay={true} />
      <p>
        Born in Sweden in 1965, Thomas Meyerhoffer is a creator and visionary.
        After earning a degree in Industrial Design from Art Center, he started
        his journey with an internship at Porsche, only to Go West to California
        for IDEO. It was there Meyerhoffer was introduced to the idea of giving
        objects meaning through its form, working with Naoto Fukasawa. He
        further formed these notions at Apple working alongside Sir Jony Ive on
        projects like the eMate and iMac. That taught him to combine the fields
        of art, craft and technology. These theories, merged with contemporary
        culture, make up Meyerhoffer’s design practice today.
      </p>
    </div>
  );
};

export default Header;
