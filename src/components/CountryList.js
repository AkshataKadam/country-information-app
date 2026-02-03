import React from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ countries, onSelect }) => {
  return (
    <div className="grid">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onClick={() => onSelect(country)}
        />
      ))}
    </div>
  );
};

export default CountryList;
