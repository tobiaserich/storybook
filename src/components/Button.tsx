import React from "react";
import styled from "@emotion/styled";

export type ButtonProps = {
  bgColor: string;
  focusColor: string;
  theme: undefined;
};

export type ExitButtonProps = {
  bgColor: string;
};

export type InfoButtonProps = {
  bgColor: string;
  corner: string;
  children: string;
};

type CornerProps = {
  [index: string]: string;
  bottomLeft: string;
  upperLeft: string;
  upperRight: string;
  bottomRight: string;
};
export const ButtonRoundCorners = styled("button")<ButtonProps>`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  border-radius: 20px;
  padding: 3px 40px;
  :focus {
    box-shadow: 0 0 5px 1px ${({ focusColor }) => focusColor};
    outline: none;
    ::-moz-focus-inner {
      border: 0;
    }
  }
`;

export const Info = styled("button")<InfoButtonProps>`
  width: 35px;
  height: 35px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  ${({ corner }) => {
    if (corner === "0px 25px 0px 0px" || corner === "0px 0px 25px 0px") {
      return "padding-left:0px";
    } else {
      return "padding-right:0px";
    }
  }};
 
  border-radius: ${({ corner }) => corner};
  font-weight: 600;
  font-size: 1.1rem;
  }
`;

export const ExitButton = styled("button")<ExitButtonProps>`
  ${({ modal }) => (modal ? "position:absolute;" : "")}
  height: 30px;
  width: 30px;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  border: none;
  font-weight: 600;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#f7e5b5")};
  color: inherit;
`;

export const InfoButton: React.FC<InfoButtonProps> = ({
  corner,
  bgColor,
  children,
}) => {
  const corners: CornerProps = {
    bottomLeft: "0px 25px 0px 0px",
    upperLeft: "0px 0px 25px 0px",
    upperRight: "0px 0px 0px 25px",
    bottomRight: "25px 0px 0px 0px",
  };
  return (
    <Info corner={corners[corner]} bgColor={bgColor}>
      {children}
    </Info>
  );
};

export const ButtonOvalCorners = styled("button")`
  background-color: #4f7b82;
  font-size: 20px;
  color: white;
  border: none;
  padding: 5px 20px 5px 20px;
  border-radius: 4px;
  :active {
    background-color: #3c5d62;
  }
`;
