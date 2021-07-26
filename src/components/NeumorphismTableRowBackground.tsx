import React from "react";
import styled from "@emotion/styled";

const RowContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  font-family: roboto;
  height: 70px;
  width: 500px;
  background-color: #ffebd6;
  margin-top: 30px;
  margin-left: 20px;
  box-shadow: 0px 5px 9px rgba(213, 210, 208, 0.59),
    inset 4px 5px 15px rgba(255, 255, 255, 0.34),
    inset 0px -2px 8px rgba(213, 210, 208, 0.5);
  border-radius: 5px;
`;

const NeumorphismTableRowBackground = ({ children }) => {
  return <RowContainer>{children}</RowContainer>;
};

export { NeumorphismTableRowBackground };
