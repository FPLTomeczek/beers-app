import { Beer } from "../interfaces/Beer";
import { SingleBeerStyled } from "../styles/Beers.styled";

const SingleBeer = ({ name, image_url, tagline }: Beer) => {
  return (
    <SingleBeerStyled>
      <img src={image_url} alt="beer" className="beer-img" />
      <p>{name}</p>
      <p>{tagline}</p>
    </SingleBeerStyled>
  );
};

export default SingleBeer;
