import { Beer } from "../types/Beer";
import { SingleBeerStyled } from "../styles/Beers.styled";

const SingleBeer = ({
  name,
  image_url,
  tagline,
  imageLoaded,
}: Beer & { imageLoaded: () => void }) => {
  return (
    <SingleBeerStyled>
      <img
        src={image_url}
        alt="beer"
        className="beer-img"
        onLoad={imageLoaded}
      />
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
