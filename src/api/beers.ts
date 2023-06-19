import { API_URL } from "../constants";

export const getBeers = async (page: number, beersPerPage: number) => {
  const response = await fetch(
    `${API_URL}beers?page=${page}&per_page=${beersPerPage}`
  );

  const data = await response.json();

  return data;
};
