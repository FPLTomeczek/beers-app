import { SetStateAction, useEffect, useState } from "react";
import { getBeers } from "../../api/beers";
import { BEERS_PER_PAGE } from "../../constants";
import { Beer } from "../../types/Beer";
import SingleBeerList from "./SingleBeerList";
import { BeersListStyled } from "../../styles/BeersListPage/Beers.styled";

const BeersList = ({
  page,
  isLoading,
  setIsLoading,
  imageLoaded,
  counter,
}: {
  page: number;
  isLoading: boolean;
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
    <BeersListStyled isLoading={isLoading}>
      {beers.map((beer) => {
        const { id, name, image_url, tagline }: Beer & { id: string } = beer;
        return (
          <SingleBeerList
            key={id}
            imageLoaded={imageLoaded}
            name={name}
            image_url={image_url}
            tagline={tagline}
            id={id}
          />
        );
      })}
    </BeersListStyled>
  );
};

export default BeersList;
