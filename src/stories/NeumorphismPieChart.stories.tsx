import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NeumorphismPieChart } from "../components/NeumorphismPieChart";

export default {
  title: "components/Neumorphism",
  component: NeumorphismPieChart,
} as Meta;

const NeumorphismPieChartTemplate: Story = () => (
  <NeumorphismPieChart perc={95}></NeumorphismPieChart>
);

export const PieChart = NeumorphismPieChartTemplate.bind();
