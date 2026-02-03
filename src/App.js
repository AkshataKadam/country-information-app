import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import SearchBar from "./components/SearchBar";
import { getAllCountries } from "./services/countryService.js";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCountries()
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🌍 Country Explorer</h1>
      <SearchBar search={search} setSearch={setSearch} />

      {selectedCountry ? (
        <CountryDetail
          country={selectedCountry}
          onBack={() => setSelectedCountry(null)}
        />
      ) : (
        <CountryList
          countries={filteredCountries}
          onSelect={setSelectedCountry}
        />
      )}
    </div>
  );
};

export default App;
