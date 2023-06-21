import styled from "styled-components";

export const SingleBeerPageStyled = styled.div<{ isLoading: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;

  .beer-img {
    max-width: 100px;
  }

  .spinner-container {
    height: 70vh;
    display: ${(props) => (props.isLoading ? "flex" : "none")};
    align-items: center;
  }
`;

export const SingleBeerStyled = styled.div<{ isLoading: boolean }>`
  display: ${(props) => (props.isLoading ? "none" : "flex")};
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
