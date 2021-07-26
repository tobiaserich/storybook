import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 50px;
  background: #ffebd6;
  box-shadow: 0px 1px 2px rgba(171, 166, 156, 0.24),
    -1px -1px 2px rgba(255, 255, 255, 0.3),
    inset -1px -1px 2px rgba(197, 193, 190, 0.43),
    inset 0px 1px 2px rgba(255, 255, 255, 0.44);
`;

const DateContainer = styled("div")`
  font-family: roboto;
  font-size: 20px;
`;

const ShiftContainer = styled("div")`
  font-family: roboto;
  font-size: 13px;
`;

const NeumorphismCalendarDayDisplay = ({ day = "01", shift = "-" }) => {
  return (
    <Container>
      <DateContainer>{day}</DateContainer>
      <ShiftContainer>{shift}</ShiftContainer>
    </Container>
  );
};

export { NeumorphismCalendarDayDisplay };
