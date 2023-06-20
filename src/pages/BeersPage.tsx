import { useRef, useState } from "react";
import BeersList from "../components/BeersList/BeersList";
import { BeersPageStyled } from "../styles/BeersListPage/Beers.styled";
import BeersListPaginateButtons from "../components/BeersList/BeersListPaginateButtons";
import { BEERS_PER_PAGE } from "../constants";
import Loading from "../components/Loading";

const BeersPage = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current === BEERS_PER_PAGE) {
      setIsLoading(false);
    }
  };

  return (
    <BeersPageStyled isLoading={isLoading}>
      <h1>Beers</h1>

      <Loading />
      <BeersList
        page={page}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        imageLoaded={imageLoaded}
        counter={counter}
      />
      <BeersListPaginateButtons page={page} setPage={setPage} />
    </BeersPageStyled>
  );
};

export default BeersPage;
