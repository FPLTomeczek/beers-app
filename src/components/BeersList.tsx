import { SetStateAction, useEffect, useState } from "react";
import { getBeers } from "../api/beers";
import { BEERS_PER_PAGE } from "../constants";
import { Beer } from "../types/Beer";
import SingleBeer from "./SingleBeer";
import { BeersListStyled } from "../styles/Beers.styled";

const BeersList = ({
  page,
  setIsLoading,
  imageLoaded,
  counter,
}: {
  page: number;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
  imageLoaded: () => void;
  counter: React.MutableRefObject<number>;
}) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const beers = await getBeers(page, BEERS_PER_PAGE);
        setBeers(beers);
      } catch (error) {
        console.log(error);
      }
    };

    counter.current = 0;
    setIsLoading(true);
    fetchBeers();
  }, [page]);

  return (
    <BeersListStyled>
      {beers.map((beer) => {
        const { id, name, image_url, tagline }: Beer & { id: string } = beer;
        return (
          <SingleBeer
            imageLoaded={imageLoaded}
            key={id}
            name={name}
            image_url={image_url}
            tagline={tagline}
          />
        );
      })}
    </BeersListStyled>
  );
};

export default BeersList;
