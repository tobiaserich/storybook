import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NeumorphismTableColumn } from "../components/NeumorphismTableColumn";

export default {
  title: "components/Neumorphism",
  component: NeumorphismTableColumn,
} as Meta;

const NeumorphismTableColumnTemplate: Story = () => (
  <NeumorphismTableColumn></NeumorphismTableColumn>
);

export const TableColumn = NeumorphismTableColumnTemplate.bind();
