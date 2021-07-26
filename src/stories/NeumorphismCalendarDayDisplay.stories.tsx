import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NeumorphismCalendarDayDisplay } from "../components/NeumorphismCalendarDayDisplay";
export default {
  title: "components/Neumorphism",
  component: NeumorphismCalendarDayDisplay,
} as Meta;

const NeumorphismCalendarDayDisplayTemplate: Story = () => (
  <NeumorphismCalendarDayDisplay></NeumorphismCalendarDayDisplay>
);

export const CalendarDayDisplay = NeumorphismCalendarDayDisplayTemplate.bind();
