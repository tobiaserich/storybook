import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NeumorphismMonthDisplay } from "../components/NeumorphismMonthDisplay";

export default {
  title: "components/Neumorphism",
  component: NeumorphismMonthDisplay,
} as Meta;

const NeumorphismMonthDisplayTemplate: Story = () => (
  <NeumorphismMonthDisplay>January</NeumorphismMonthDisplay>
);
export const MonthDisplay = NeumorphismMonthDisplayTemplate.bind();
