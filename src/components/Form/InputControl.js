import styled from "styled-components";

const InputControl = styled.input`
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.11);
  border-radius: 39.1416px;

  height: 50px;
  width: 100%;

  padding: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  color: #656565;

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;

    color: #656565;
  }
`;

export default InputControl;
