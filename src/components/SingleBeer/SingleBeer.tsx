import { useEffect, useState } from "react";
import { getBeer } from "../../api/beers";
import { SingleBeerStyled } from "../../styles/SingleBeerPage/SingleBeer.styled";
import { Malt, Hop } from "../../types/Beer";

const SingleBeer = ({ beerID }: { beerID: string | undefined }) => {
  const [beer, setBeer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const beer = await getBeer(Number(beerID));
        setBeer(beer);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeer();
  }, [beerID]);

  return (
    <>
      {beer.map((beerData) => {
        // TODO ingredients
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
          <SingleBeerStyled key={id}>
            <h2 id="beer-name">{name}</h2>
            <div className="beer-main-data">
              <div className="img-container">
                <img src={image_url} alt="beer" className="beer-img" />
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
