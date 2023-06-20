import { useParams } from "react-router-dom";
import SingleBeer from "../components/SingleBeer/SingleBeer";
import { SingleBeerPageStyled } from "../styles/SingleBeerPage/SingleBeer.styled";

const SingleBeerPage = () => {
  const { id } = useParams();

  return (
    <SingleBeerPageStyled>
      <h1>Beer</h1>
      <SingleBeer beerID={id} />
    </SingleBeerPageStyled>
  );
};

export default SingleBeerPage;
