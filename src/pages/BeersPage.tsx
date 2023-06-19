import BeersList from "../components/BeersList";
import { BeersPageStyled } from "../styles/Beers.styled";

const BeersPage = () => {
  return (
    <BeersPageStyled>
      <h1>Beers</h1>
      <BeersList />
    </BeersPageStyled>
  );
};

export default BeersPage;
