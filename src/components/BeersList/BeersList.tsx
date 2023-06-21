import { useEffect, useRef } from "react";
import { getBeers } from "../../api/beers";
import { BEERS_PER_PAGE } from "../../constants";
import SingleBeerList from "./SingleBeerList";
import { BeersListStyled } from "../../styles/BeersListPage/Beers.styled";
import { useBeersContext } from "../../context/BeersContext";
import { Types } from "../../reducers/beersReducer";

const BeersList = () => {
  const { state, dispatch } = useBeersContext();

  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current === BEERS_PER_PAGE) {
      dispatch({ type: Types.IsBeersListLoading, payload: false });
    }
  };

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const beers = await getBeers(state.beersListPage, BEERS_PER_PAGE);
        dispatch({ type: Types.AddBeers, payload: beers });
        dispatch({ type: Types.SetBeer, payload: [] });
      } catch (error) {
        console.log(error);
      }
    };

    counter.current = 0;
    dispatch({ type: Types.IsBeersListLoading, payload: true });
    fetchBeers();
  }, [state.beersListPage]);

  return (
    <BeersListStyled isLoading={state.isBeersListLoading}>
      {state.beersList &&
        state.beersList.map((beer) => {
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
