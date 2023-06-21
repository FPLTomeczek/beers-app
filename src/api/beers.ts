import { API_URL } from "../constants";

export const getBeers = async (page: number, beersPerPage: number) => {
  const response = await fetch(
    `${API_URL}beers?page=${page}&per_page=${beersPerPage}`
  );

  if (response.ok) {
    const beersData = await response.json();
    return beersData;
  }

  throw new Error("Beers page not found");
};

export const getBeer = async (beerID: number) => {
  const response = await fetch(`${API_URL}beers/${beerID}`);

  if (response.ok) {
    const beerData = await response.json();
    return beerData;
  }

  throw new Error("Beer not Found");
};
