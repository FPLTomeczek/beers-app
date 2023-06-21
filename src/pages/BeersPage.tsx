import { useState } from "react";
import BeersList from "../components/BeersList/BeersList";
import { BeersPageStyled } from "../styles/BeersListPage/Beers.styled";
import BeersListPaginateButtons from "../components/BeersList/BeersListPaginateButtons";
import Loading from "../components/Loading";
import { useBeersContext } from "../context/BeersContext";

const BeersPage = () => {
  const [page, setPage] = useState(1);

  const { state } = useBeersContext();

  return (
    <BeersPageStyled isLoading={state.isLoading}>
      <h1>Beers</h1>
      <Loading />
      <BeersList page={page} />
      <BeersListPaginateButtons page={page} setPage={setPage} />
    </BeersPageStyled>
  );
};

export default BeersPage;
