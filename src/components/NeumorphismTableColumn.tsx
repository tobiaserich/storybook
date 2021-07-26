import React from "react";
import styled from "@emotion/styled";

type WaveProps = {
  animation: boolean;
};

const Row = styled("div")`
  position: relative;
  display: flex;
  margin-left: 5px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0);
  height: 60px;
  width: 20px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const Wave = styled("div")<WaveProps>`
  position: absolute;
  background: url("./wave.svg");
  z-index: 20;
  width: 100px;
  height: 100px;
  opacity: 0;
  top: -10px;
  animation: ${({ animation }) =>
    animation ? "waveAction 1s linear both" : ""};
  @keyframes waveAction {
    0% {
      opacity: 0.5;
      transform: translate(-80px, 100px);
    }
    100% {
      opacity: 0.5;
      transform: translate(30px, -10px);
    }
  }
`;

const TopText = styled("div")`
  font-size: 14px;
  line-height: 80%;
`;
const SubText = styled("div")`
  font-size: 10px;
  line-height: 80%;
`;

const Content = styled("div")`
  text-align: center;
`;

const NeumorphismTableColumn = () => {
  const [startAnimation, setStartAnimation] = React.useState(false);

  return (
    <Row
      onClick={() => {
        setStartAnimation(true);
      }}
    >
      <Wave animation={startAnimation}></Wave>
      <Content>
        <TopText>10</TopText> <SubText>Do</SubText>
      </Content>
      <Content>
        <TopText>F</TopText>
        <SubText></SubText>
      </Content>
    </Row>
  );
};

export { NeumorphismTableColumn };
