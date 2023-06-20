import styled from "styled-components";

export const SingleBeerPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;

  .beer-img {
    max-width: 100px;
  }
`;

export const SingleBeerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  #beer-name {
    text-align: center;
  }
  .beer-main-data {
    display: flex;
    justify-content: start;
    gap: 2rem;
    align-items: center;
  }
  @media screen and (min-width: 480px) {
    .beer-main-data {
      justify-content: center;
      align-items: end;
    }
  }
`;
