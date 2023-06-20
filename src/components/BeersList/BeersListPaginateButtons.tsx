import { Dispatch, SetStateAction } from "react";
import { Direction } from "../../enums/Direction";
import { BeersListPaginateButtonsStyled } from "../../styles/BeersListPage/Beers.styled";

const BeersListPaginateButtons = ({
  page,
  setPage,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const handleSettingPage = (direction: Direction) => {
    switch (direction) {
      case Direction.PREV:
        setPage((prev) => {
          return prev - 1 > 0 ? prev - 1 : prev;
        });
        break;
      case Direction.NEXT:
        setPage((prev) => {
          return prev + 1;
        });
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
      <span className="page-number">{page}</span>
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
