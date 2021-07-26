import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NeumorphismTableRowBackground } from "../components/NeumorphismTableRowBackground";
import { NeumorphismTableColumn } from "../components/NeumorphismTableColumn";
import { NeumorphismNameBox } from "../components/NeumorphismNameBox";

export default {
  title: "components/Neumorphism",
  parameters: { backgrounds: { default: "neumorphism" } },
} as Meta;

const NeumorphismFullTableTemplate: Story = () => {
  return (
    <>
      <NeumorphismTableRowBackground>
        <NeumorphismNameBox></NeumorphismNameBox>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
        <NeumorphismTableColumn></NeumorphismTableColumn>
      </NeumorphismTableRowBackground>
    </>
  );
};
export const FullTable = NeumorphismFullTableTemplate.bind();
