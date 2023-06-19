import { useRef, useState } from "react";
import BeersList from "../components/BeersList";
import { BeersPageStyled } from "../styles/Beers.styled";
import BeersListPaginateButtons from "../components/BeersListPaginateButtons";
import { BEERS_PER_PAGE } from "../constants";

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
    <BeersPageStyled>
      <h1>Beers</h1>

      <div style={{ display: isLoading ? "block" : "none" }}>
        <span className="spinner"></span>
      </div>
      <div style={{ display: isLoading ? "none" : "block" }}>
        <BeersList
          page={page}
          setIsLoading={setIsLoading}
          imageLoaded={imageLoaded}
          counter={counter}
        />
        <BeersListPaginateButtons page={page} setPage={setPage} />
      </div>
    </BeersPageStyled>
  );
};

export default BeersPage;
