import styled from "styled-components";

const BackgoundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 650px) {
    img {
      width: 80%;

      margin-top: -45px;
    }
  }

  @media screen and (min-width: 700px) {
    img#rectangle {
      display: none;
    }
  }
`;

export default BackgoundContainer;
