import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ExitButton, ExitButtonProps } from "../components/Button";

export default {
  title: "components/Buttons/Exit",
  component: ExitButton,
  argTypes: {
    bgColor: { control: "color" },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} as Meta;

const ExitTemplate: Story<ExitButtonProps> = (args) => (
  <ExitButton {...args}>X</ExitButton>
);

export const Exit = ExitTemplate.bind({});

Exit.args = {
  bgColor: "#F7E5B5",
};
