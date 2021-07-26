import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: roboto;
`;
const Background = styled("div")`
  width: ${({ pp }) => pp}%;
  height: 30px;
  background-color: #ffebd6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 68px;
  box-shadow: 3px 3px 4px rgba(144, 144, 144, 0.25),
    -3px -3px 15px rgba(255, 255, 255, 0.74);
  animation: ${({ sh }) => `showBar${sh}`} 1s;
  @keyframes ${({ sh }) => `showBar${sh}`} {
    0% {
      width: 0%;
    }

    30% {
    }

    60% {
    }

    100% {
      width: ${({ pp }) => pp}%;
    }
  }
`;

const ColorBar = styled("div")`
  width: calc(100% - 14px);
  height: 28px;
  background-color: rgba(${({ coloring }) => coloring});
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 68px;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 4px rgba(0, 0, 0, 0.18);
`;

const NeumorphismStatBar = ({ shift, color, percentage = "70" }) => {
  return (
    <Container>
      <Background pp={percentage} sh={shift}>
        <ColorBar coloring={color}>{shift}</ColorBar>
      </Background>
      <div>{percentage}%</div>
    </Container>
  );
};

export { NeumorphismStatBar };
