import { Beer } from "../../types/Beer";
import { SingleBeerListStyled } from "../../styles/BeersListPage/Beers.styled";
import { Link } from "react-router-dom";

const SingleBeerList = ({
  name,
  id,
  image_url,
  tagline,
  imageLoaded,
}: Partial<Beer> & { imageLoaded: () => void }) => {
  return (
    <SingleBeerListStyled>
      <Link to={`/details/${id}`} key={id} id="single-beer-link">
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
      </Link>
    </SingleBeerListStyled>
  );
};

export default SingleBeerList;
