import styled from "styled-components";

const ButtonControl = styled.button`
  border: none;
  background: ${(props) => (props.isloading ? "#306976" : "#4fa4b3")};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.11);
  border-radius: 39.1416px;

  transition: all 0.5s ease-in-out;

  height: 50px;
  width: 100%;

  padding: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  pointer-events: ${(props) => (props.isloading ? "none" : "all")};

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #306976;
  }
`;

export default ButtonControl;
