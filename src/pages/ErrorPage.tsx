import styled from "styled-components";
import Error from "../components/Error";

const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <Error />;
    </ErrorPageStyled>
  );
};

const ErrorPageStyled = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default ErrorPage;
