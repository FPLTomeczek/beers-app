import styled from "styled-components";

export const BeersListStyled = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 4rem 0;
`;

export const SingleBeerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 300px;
  text-align: center;
  padding: 1rem;
  border: 2px solid var(--light-primary-color);
  min-height: 300px;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    border-color: var(--secondary-color);
  }

  .beer-img {
    max-width: 50px;
    object-fit: contain;
  }
  .beer-name {
    font-weight: 700;
  }
`;

export const BeersPageStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  h1 {
    color: var(--secondary-color);
  }
`;

export const BeersListPaginateButtonsStyled = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;
  .page-number {
    background-color: var(--secondary-color);
    color: #ffffff;
    padding: 0.6em 0.8em;
    border-radius: 5px;
  }
`;
