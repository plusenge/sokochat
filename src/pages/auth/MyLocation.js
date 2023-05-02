import React, { useState, useEffect } from "react"; // Import React, useState and useEffect hooks from React library
import axios from "axios"; // Import axios library for making HTTP requests
import { FlagIcon } from "react-flag-kit"; // Import FlagIcon component from react-flag-kit

function MyLocation(props) {
  const [countryCode, setCountryCode] = useState(""); // Declare a state variable countryCode and initialize it with an empty string

  useEffect(() => {
    // Declare a side effect function that fetches the country code from the IP API endpoint
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        setCountryCode(response.data.country_code); // Set the countryCode state variable to the retrieved country code
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // The side effect should only run once, on component mount

  return (
    <div className="d-flex my-location ">
      {/* Render the
      countryCode as a text*/}
      <h6 className="mx-1 text-dark ">{countryCode}</h6>
      <div className="flag-container">
        <FlagIcon
          code={countryCode}
          size={20}
          style={{ borderRadius: "50%", marginTop: "-.45rem" }}
        />
        {/* Render the FlagIcon component with the countryCode as a prop*/}
      </div>
    </div>
  );
}

export default MyLocation;
