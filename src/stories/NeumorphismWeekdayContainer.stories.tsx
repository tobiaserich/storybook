import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NeumorphismWeekdayContainer } from "../components/NeumorphismWeekdayContainer";

export default {
  title: "components/Neumorphism",
  component: NeumorphismWeekdayContainer,
} as Meta;

const NeumorphismWeekdayContainerTemplate: Story = () => {
  return (
    <>
      <NeumorphismWeekdayContainer>Mo</NeumorphismWeekdayContainer>
    </>
  );
};

export const WeekdayContainer = NeumorphismWeekdayContainerTemplate.bind();
