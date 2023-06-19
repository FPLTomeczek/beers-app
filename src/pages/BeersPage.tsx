import BeersList from "../components/BeersList";
import { BeersPageStyled } from "../styles/Beers.styled";
import BeersListPaginateButtons from "../components/BeersListPaginateButtons";
import { useState } from "react";

const BeersPage = () => {
  const [page, setPage] = useState(10);

  return (
    <BeersPageStyled>
      <div className="website-background-clip"></div>
      <h1>Beers</h1>
      <BeersList page={page} />
      <BeersListPaginateButtons page={page} setPage={setPage} />
    </BeersPageStyled>
  );
};

export default BeersPage;
