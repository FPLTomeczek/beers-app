import { useParams } from "react-router-dom";
import SingleBeer from "../components/SingleBeer/SingleBeer";
import { SingleBeerPageStyled } from "../styles/SingleBeerPage/SingleBeer.styled";
import Loading from "../components/Loading";
import { useBeersContext } from "../context/BeersContext";

const SingleBeerPage = () => {
  const { id } = useParams();
  const { state } = useBeersContext();

  return (
    <SingleBeerPageStyled isLoading={state.isSingleBeerLoading}>
      <h1>Beer</h1>
      <Loading />
      <SingleBeer beerID={id} />
    </SingleBeerPageStyled>
  );
};

export default SingleBeerPage;
