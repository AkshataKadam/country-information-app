import React from "react";

const CountryCard = ({ country, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={country.flags.svg} alt={country.name.common} />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
