import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NeumorphismSwitchMenu } from "../components/NeumorphismSwitchMenu";

export default {
  title: "components/Neumorphism",
  component: NeumorphismSwitchMenu,
} as Meta;

const NeumorphismSwitchMenuTemplate: Story = () => <NeumorphismSwitchMenu />;

export const SwitchMenu = NeumorphismSwitchMenuTemplate.bind();
