import styled from "@emotion/styled";
import React from "react";
import placeholderImage from "../assets/placeholderImage.svg";

const ImgContainer = styled("div")`
  width: 200px;
  height: 200px;
`;

const Image = styled("img")`
  border-radius: 50%;
`;

export const UserImagePlaceholder = () => {
  return (
    <ImgContainer>
      <Image src={placeholderImage} />
    </ImgContainer>
  );
};
