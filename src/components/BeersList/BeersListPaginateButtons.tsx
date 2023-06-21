import { Direction } from "../../enums/Direction";
import { BeersListPaginateButtonsStyled } from "../../styles/BeersListPage/Beers.styled";
import { useBeersContext } from "../../context/BeersContext";
import { Types } from "../../reducers/beersReducer";

const BeersListPaginateButtons = () => {
  const { state, dispatch } = useBeersContext();

  const handleSettingPage = (direction: Direction) => {
    switch (direction) {
      case Direction.PREV:
        dispatch({ type: Types.SetPage, payload: direction });
        break;
      case Direction.NEXT:
        dispatch({ type: Types.SetPage, payload: direction });
        break;
    }
  };

  return (
    <BeersListPaginateButtonsStyled>
      <button
        onClick={() => handleSettingPage(Direction.PREV)}
        aria-label="previous page"
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <span className="page-number">{state.beersListPage}</span>
      <button
        onClick={() => handleSettingPage(Direction.NEXT)}
        aria-label="next page"
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </BeersListPaginateButtonsStyled>
  );
};

export default BeersListPaginateButtons;
