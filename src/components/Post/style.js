import styled from "styled-components";

const PostContent = styled.div`
  width: 100%;
  box-shadow: 0px 7px 20px #c4c4c4;
  border-radius: 20px;

  background-color: white;

  padding: ${(props) => (props.padding ? "20px" : "0")};

  position: relative;

  @media screen and (min-width: 700px) {
    width: 40%;
  }
`;

const PostHeader = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  top: 0;
  left: 0;
`;

const UserImage = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

const UserName = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 19px;

  margin-left: 10px;

  color: #000000;
`;

const PostDescription = styled.div`
  width: 100%;

  margin: 55px 0 20px 0;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 19px;

  color: #000000;
`;

const PostImage = styled.div`
  width: 100%;
  height: 300px;

  border-radius: 20px;

  background-color: lightgray;
`;

export {
  PostContent,
  PostHeader,
  UserImage,
  UserName,
  PostDescription,
  PostImage,
};
