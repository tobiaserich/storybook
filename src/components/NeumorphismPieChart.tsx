import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #ffebd6;
  box-shadow: 4px 4px 4px rgba(144, 144, 144, 0.1),
    -1px -4px 4px rgba(255, 255, 255, 0.26);
`;

const Pie = styled("div")`
  height: 130px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.18);
  background: ${({ angle }) => `conic-gradient(
    rgba(0, 180, 140, 0.5) 0deg ${angle}deg,
    transparent ${angle}deg`}
  );
`;

const FrontPlate = styled("div")`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: roboto;
  background-color: #ffe6cc;
  box-shadow: 4px 4px 4px rgba(144, 144, 144, 0.1),
    -1px -4px 4px rgba(255, 255, 255, 0.26);
`;
const NeumorphismPieChart = ({ perc = 75 }) => {
  const [currentAngle, setCurrentAngle] = React.useState(0);

  React.useEffect(() => {
    playAnimation();
  }, []);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  const playAnimation = async () => {
    const frameDuration = 100 / perc;
    for (let i = 0; i <= perc; i++) {
      setCurrentAngle((360 / 100) * i);
      await timer(10);
    }
  };
  return (
    <Container>
      <Pie angle={currentAngle}>
        <FrontPlate>{perc}% / 100%</FrontPlate>
      </Pie>
    </Container>
  );
};

export { NeumorphismPieChart };
