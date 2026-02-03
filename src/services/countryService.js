import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = () =>
  axios.get(`${BASE_URL}/all?fields=name,flags,capital,population,languages`);
