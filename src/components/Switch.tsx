import React from "react";
import styled from "@emotion/styled";

export type SwitchPanelProps = {
  shadowColor: string;
};

export type SwitchKnobProps = {
  knobColor: string;

  animation: boolean | null;
};

export type SwitchProps = {
  shadowColor: SwitchPanelProps["shadowColor"];
  knobColor: SwitchKnobProps["knobColor"];
  animationTrigger?: boolean | null;
  onStatusChange?: (status: boolean) => void;

};

export const SwitchPanel = styled("div")<SwitchPanelProps>`
  display: flex;
  align-items: center;
  height: 10px;
  width: 30px;
  margin-left: 4px;
  margin-right: 4px;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0px 2px 4px ${({ shadowColor }) => shadowColor};
`;

export const SwitchKnob = styled("div")<SwitchKnobProps>`
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: ${({ knobColor }) => knobColor};
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.4),
    inset -2px -2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border: none;
  animation: ${({ animation }) =>
    animation === null
      ? ""
      : animation
      ? "switch-back 0.1s linear normal forwards"
      : "switch 0.1s linear normal forwards"};

  @keyframes switch {
    0% {
      left: 0;
    }
    100% {
      left: calc(100% - 15px);
    }
  }
  @keyframes switch-back {
    0% {
      left: calc(100% - 15px);
    }
    100% {
      left: 0;
    }
  }
`;

export const SwitchButton: React.FC<SwitchProps> = ({
  shadowColor,
  knobColor,
  animationTrigger,
  onStatusChange,
}) => {
  const [animation, setAnimation] = React.useState<null | boolean>(null);

  React.useEffect(() => {
    animationTrigger ? setAnimation(animationTrigger) : "";
  }, [animationTrigger]);

  const handleClick = () => {
    onStatusChange ? onStatusChange(!animation) : "";
    setAnimation(!animation);
  };

  return (
    <SwitchPanel shadowColor={shadowColor}>
      <SwitchKnob
        onClick={() => handleClick()}
        animation={animation}
        knobColor={knobColor}
      />
    </SwitchPanel>
  );
};
