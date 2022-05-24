import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.recipient ? "flex-start" : "flex-end")};

  &:last-of-type {
    padding-bottom: 10px;
  }
`;

const MessageContent = styled.div`
  background-color: #f2f2f2;
  border-radius: ${(props) =>
    props.recipient ? "0px 15px 15px 15px" : "15px 0px 15px 15px"};

  max-width: 267.92px;

  padding: 20px;

  @media screen and (min-width: 700px) {
    max-width: 412.92px;
  }
`;

const MessageControl = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #656565;
`;

export { MessageContainer, MessageContent, MessageControl };
