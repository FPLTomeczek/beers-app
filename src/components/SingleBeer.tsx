import { Beer } from "../interfaces/Beer";
import { SingleBeerStyled } from "../styles/Beers.styled";

const SingleBeer = ({ name, image_url, tagline }: Beer) => {
  return (
    <SingleBeerStyled>
      <img src={image_url} alt="beer" className="beer-img" />
      <p className="beer-name">{name}</p>
      <div className="underline">
        <div className="rhombus-container">
          <div className="rhombus"></div>
        </div>
      </div>

      <p>{tagline}</p>
    </SingleBeerStyled>
  );
};

export default SingleBeer;
