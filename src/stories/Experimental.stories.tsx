import React from "react";
import { NeumorphismPieChart as ExperimentalComponent } from "../components/NeumorphismPieChart";

import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "components/experimental",
  component: ExperimentalComponent,
  argTypes: {},
};

const ExperimentalTemplate: Story = () => (
  <>
    <ExperimentalComponent>September</ExperimentalComponent>
  </>
);

export const Experimental = ExperimentalTemplate.bind();
