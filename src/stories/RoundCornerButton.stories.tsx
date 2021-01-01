import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonRoundCorners, ButtonProps } from "../components/Button";

export default {
  title: "components/Buttons/With Round Corners",
  component: ButtonRoundCorners,
  argTypes: {
    bgColor: { control: "color" },
    focusColor: { control: "color" },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} as Meta;

const WithRoundCornersTemplate: Story<ButtonProps> = (args) => (
  <ButtonRoundCorners {...args}>Test</ButtonRoundCorners>
);

export const WithRoundCorners = WithRoundCornersTemplate.bind({});
WithRoundCorners.args = {
  bgColor: "#F7E5B5",
  focusColor: "#4ca48e",
};
