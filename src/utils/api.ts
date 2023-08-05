import { API_URL, STRAPI_API_TOKEN } from "./url";

export const fetchDataFromAPI = async (endpoint: any) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ` + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};