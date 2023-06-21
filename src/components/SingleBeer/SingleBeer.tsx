import { useEffect } from "react";
import { getBeer } from "../../api/beers";
import { SingleBeerStyled } from "../../styles/SingleBeerPage/SingleBeer.styled";
import { Malt, Hop } from "../../types/Beer";
import { useBeersContext } from "../../context/BeersContext";
import { Types } from "../../reducers/beersReducer";

const SingleBeer = ({ beerID }: { beerID: string | undefined }) => {
  const { state, dispatch } = useBeersContext();

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const beer = await getBeer(Number(beerID));
        dispatch({ type: Types.SetBeer, payload: beer });
      } catch (error) {
        console.log(error);
      }
    };
    dispatch({ type: Types.IsSingleBeerLoading, payload: true });
    fetchBeer();
  }, [beerID]);

  const handleImageOnLoad = () => {
    dispatch({ type: Types.IsSingleBeerLoading, payload: false });
  };

  return (
    <>
      {state.singleBeer &&
        state.singleBeer.map((beerData) => {
          const {
            image_url,
            name,
            tagline,
            description,
            abv,
            ibu,
            ingredients: { malt, hops, yeast },
            id,
          } = beerData;
          const maltList: Malt[] = malt;
          const hopsList: Hop[] = hops;
          const maltNames = maltList.map((malt) => malt.name).join(", ");
          const hopsNames = hopsList.map((hop) => hop.name).join(", ");
          return (
            <SingleBeerStyled key={id} isLoading={state.isSingleBeerLoading}>
              <h2 id="beer-name">{name}</h2>
              <div className="beer-main-data">
                <div className="img-container">
                  <img
                    src={image_url}
                    alt="beer"
                    className="beer-img"
                    onLoad={handleImageOnLoad}
                  />
                </div>
                <div>
                  <p>{tagline}</p>
                  <p>
                    <b>ABV:</b> {abv}
                  </p>
                  <p>
                    <b>IBU:</b> {ibu}
                  </p>
                  <p>
                    <b>Malts:</b> {maltNames}
                  </p>
                  <p>
                    <b>Hops:</b> {hopsNames}
                  </p>
                  <p>
                    <b>Yeast:</b> {yeast}
                  </p>
                </div>
              </div>

              <p>{description}</p>
            </SingleBeerStyled>
          );
        })}
    </>
  );
};

export default SingleBeer;
