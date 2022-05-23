import styled from "styled-components";

const SearchedUserCardContainer = styled.div`
  width: 100%;
  height: 110px;

  background: rgba(243, 251, 251, 0.9);
  border-radius: 33px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 20px;

  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 700px;
  }
`;

const UserImageContainer = styled.div`
  border: 1px solid #000000;

  border-radius: 100%;
  width: 75px;
  height: 75px;

  position: absolute;

  transform: matrix(0.71, 0.7, -0.72, 0.71, 0, 0);
`;

const UserImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 100%;

  position: relative;
  left: 5px;
`;

const UserName = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12.8px;
  line-height: 19px;

  margin-left: 25px;

  color: #000000;
`;

export { SearchedUserCardContainer, UserImageContainer, UserImage, UserName };
