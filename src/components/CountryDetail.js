import React from "react";

const CountryDetail = ({ country, onBack }) => {
  return (
    <div className="detail">
      <button onClick={onBack}>⬅ Back</button>

      <img
        src={country.flags?.svg}
        alt={country.name?.common}
      />

      <h2>{country.name?.common || "Unknown"}</h2>

      <p>
        <strong>Capital:</strong>{" "}
        {country.capital?.[0] || "N/A"}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country.population
          ? country.population.toLocaleString()
          : "N/A"}
      </p>

      <p>
        <strong>Languages:</strong>{" "}
        {country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A"}
      </p>

      <p>
        <strong>Timezones:</strong>{" "}
        {country.timezones?.join(", ") || "N/A"}
      </p>

      <p>
        <strong>Currency:</strong>{" "}
        {country.currencies
          ? Object.values(country.currencies)
              .map((c) => c.name)
              .join(", ")
          : "N/A"}
      </p>
    </div>
  );
};


export default CountryDetail;
