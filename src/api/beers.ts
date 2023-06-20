import { API_URL } from "../constants";

export const getBeers = async (page: number, beersPerPage: number) => {
  const response = await fetch(
    `${API_URL}beers?page=${page}&per_page=${beersPerPage}`
  );

  const beersData = await response.json();

  return beersData;
};

export const getBeer = async (beerID: number) => {
  const response = await fetch(`${API_URL}beers/${beerID}`);

  const beerData = await response.json();

  return beerData;
};
