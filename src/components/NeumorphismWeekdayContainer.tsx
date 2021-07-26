import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 25px;
  background-color: #ffe6cc;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.7),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: roboto;
`;

const NeumorphismWeekdayContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export { NeumorphismWeekdayContainer };
