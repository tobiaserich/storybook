import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NeumorphismArrow } from "../components/NeumorphismArrow";

export default {
  title: "components/Neumorphism",
  component: NeumorphismArrow,
} as Meta;

const NeumorphismArrowTemplate: Story = () => (
  <>
    <NeumorphismArrow direction="right" />
    <NeumorphismArrow direction="left" />
  </>
);
export const Arrow = NeumorphismArrowTemplate.bind();
