import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../components/Button";

export default {
  title: "components/Buttons/Primary",
  component: Button,
  argTypes: {
    bgColor: { control: "color" },
    focusColor: { control: "color" },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} as Meta;

const PrimaryTemplate: Story<ButtonProps> = (args) => (
  <Button {...args}>Test</Button>
);

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  bgColor: "#F7E5B5",
  focusColor: "#4ca48e",
};
