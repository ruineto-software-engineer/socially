import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 700px) {
    background: radial-gradient(
      89.56% 89.56% at 67.09% 9.5%,
      #ffe1e0 0%,
      #e1f6f4 100%
    );
  }
`;

export default Container;
