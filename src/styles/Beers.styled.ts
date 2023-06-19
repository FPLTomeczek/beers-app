import styled from "styled-components";

export const BeersListStyled = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const SingleBeerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  .beer-img {
    max-width: 50px;
    object-fit: contain;
  }
`;

export const BeersPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
