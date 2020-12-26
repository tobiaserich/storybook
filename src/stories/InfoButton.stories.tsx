import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InfoButton, InfoButtonProps } from "../components/Button";

export default {
  title: "components/Buttons/Info",
  component: InfoButton,
  argTypes: {
    bgColor: { control: "color" },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    corner: {
      control: {
        type: "inline-radio",
        options: ["upperLeft", "upperRight", "bottomLeft", "bottomRight"],
      },
    },
  },
} as Meta;

const InfoTemplate: Story<InfoButtonProps> = (args) => (
  <InfoButton {...args}>?</InfoButton>
);

export const Info = InfoTemplate.bind({});

Info.args = {
  bgColor: "#F7E5B5",
  corner: "bottomLeft",
};
