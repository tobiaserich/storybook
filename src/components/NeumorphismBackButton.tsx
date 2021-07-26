import React from "react";
import styled from "@emotion/styled";
import backArrow from "../assets/backArrow.svg";

const Button = styled("div")`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffebd6;
  box-shadow: 4px 4px 4px rgba(144, 144, 144, 0.1),
    -1px -4px 4px rgba(255, 255, 255, 0.26);
  border-radius: 9px;
`;

const NeumorphismBackButton = () => {
  return (
    <Button>
      <img src={backArrow} />
    </Button>
  );
};

export { NeumorphismBackButton };
