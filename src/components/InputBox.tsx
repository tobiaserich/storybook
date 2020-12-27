import React from "react";
import styled from "@emotion/styled";
import { SwitchButton } from "../components/Switch";

export type ScoreBoardProps = {
  points: number;
};

export type InputBoxProps = {
  points: number;
};

export const Card = styled("div")`
  width: 80%;
  max-width: 400px;
  min-height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fcf5e3;
  box-shadow: 1px 1px 4px #535050;
  border-radius: 5px;
  margin: auto;
  margin-top: 12px;
  padding: 5px;
`;

export const Heading = styled("h2")`
  margin: 0;
  width: 90px;
  font-size: 1.3rem;
  font-weight: 400;
  color: #535050;
  font-family: Roboto;
`;

export const ScoreBoard = styled("div")<ScoreBoardProps>`
  width: 30px;
  height: 30px;
  background-color: ${({ points }) =>
    points === 0
      ? "#f5f5f5"
      : points === 1
      ? "#FFE666"
      : points === 2
      ? "#EDBE5E"
      : "#FF6666"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.3rem;
  color: #535050;
  font-family: Roboto;
`;

export const InputField = styled("input")`
  width: 75px;
  height: 28px;
  margin-right: 30px;
  box-shadow: inset 1px 1px 4px #33535050;
  border-radius: 2px;
  text-align: center;
  font-size: 1.3rem;
  :focus {
    box-shadow: 0 0 5px 1px #4ca48e;
  }
`;

export const InputBox: React.FC<InputBoxProps> = ({ points }) => {
  return (
    <Card>
      <Heading>Heading</Heading>
      <InputField />
      <ScoreBoard points={points}>{points}</ScoreBoard>
    </Card>
  );
};

export const InputBoxWithKnob: React.FC = () => {
  const [points, setPoints] = React.useState(0);

  const handleEvent = (status: boolean): void => {
    console.log("yey");
    if (status) {
      setPoints(0);
    } else {
      setPoints(1);
    }
  };
  return (
    <Card>
      <Heading>Heading</Heading>
      <SwitchButton
        knobColor="#257888"
        shadowColor="#535050"
        onStatusChange={handleEvent}
      />
      <ScoreBoard points={points}>{points}</ScoreBoard>
    </Card>
  );
};
