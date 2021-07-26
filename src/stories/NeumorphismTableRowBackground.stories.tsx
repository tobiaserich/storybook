import React from "react";
import { Story, Meta } from "@storybook/React/types-6-0";
import { NeumorphismTableRowBackground } from "../components/NeumorphismTableRowBackground";

export default {
  title: "components/Neumorphism",
  component: NeumorphismTableRowBackground,
} as Meta;

const NeumorphismTableRowBackgroundTemplate: Story = () => (
  <NeumorphismTableRowBackground></NeumorphismTableRowBackground>
);
export const NeumorphismTableRowBG = NeumorphismTableRowBackgroundTemplate.bind();
