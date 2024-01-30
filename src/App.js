import React,{ useEffect, useState } from "react";
import axios from "axios";


export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () =>{
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      setCountries(res.data)
    } catch (e) {
      console.log("Error fetching data: ", e);
    }
  };

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100px",
    height: "100px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  
  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.cca3} style={cardStyle}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={imageStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
