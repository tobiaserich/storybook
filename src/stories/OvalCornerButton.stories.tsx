import React from "react";
import { ButtonOvalCorners as ButtonOvalCornersComponent } from "../components/Button";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "components/Buttons/With Oval Corners",
  component: ButtonOvalCornersComponent,
  argTypes: {},
} as Meta;

const ButtonOvalCornersTemplate: Story = () => (
  <ButtonOvalCornersComponent>Text</ButtonOvalCornersComponent>
);

export const WithOvalCorners = ButtonOvalCornersTemplate.bind();
