import BeersList from "../components/BeersList/BeersList";
import { BeersPageStyled } from "../styles/BeersListPage/Beers.styled";
import BeersListPaginateButtons from "../components/BeersList/BeersListPaginateButtons";
import Loading from "../components/Loading";
import { useBeersContext } from "../context/BeersContext";

const BeersPage = () => {
  const { state } = useBeersContext();

  return (
    <BeersPageStyled isLoading={state.isBeersListLoading}>
      <h1>Beers</h1>
      <Loading />
      <BeersList />
      <BeersListPaginateButtons />
    </BeersPageStyled>
  );
};

export default BeersPage;
