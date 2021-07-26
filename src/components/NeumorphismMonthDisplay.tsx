import React from "react";
import styled from "@emotion/styled";

const Display = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 26px;
  background: #ffe6cc;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #333333;
  font-family: Roboto;
  font-size: 24px;
`;
const NeumorphismMonthDisplay = ({ children }) => {
  return <Display>{children}</Display>;
};

export { NeumorphismMonthDisplay };
