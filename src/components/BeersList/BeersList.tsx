import { useEffect, useRef } from "react";
import { getBeers } from "../../api/beers";
import { BEERS_PER_PAGE } from "../../constants";
import SingleBeerList from "./SingleBeerList";
import { BeersListStyled } from "../../styles/BeersListPage/Beers.styled";
import { useBeersContext } from "../../context/BeersContext";
import { Types } from "../../reducers/beersReducer";

const BeersList = ({ page }: { page: number }) => {
  const { state, dispatch } = useBeersContext();

  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current === BEERS_PER_PAGE) {
      dispatch({ type: Types.IsLoading, payload: false });
    }
  };

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const beers = await getBeers(page, BEERS_PER_PAGE);
        dispatch({ type: Types.Add_Beers, payload: beers });
      } catch (error) {
        console.log(error);
      }
    };

    counter.current = 0;
    dispatch({ type: Types.IsLoading, payload: true });
    fetchBeers();
  }, [page]);

  return (
    <BeersListStyled isLoading={state.isLoading}>
      {state.beers &&
        state.beers.map((beer) => {
          return (
            <SingleBeerList
              key={beer.id}
              imageLoaded={imageLoaded}
              beer={beer}
            />
          );
        })}
    </BeersListStyled>
  );
};

export default BeersList;
