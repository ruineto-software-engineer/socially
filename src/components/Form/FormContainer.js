import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 2;

  width: 80%;

  margin-top: 240px;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export default FormContainer;
