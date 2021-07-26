import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { NeumorphismBackButton } from "../components/NeumorphismBackButton";

export default {
  title: "components/Neumorphism",
  component: NeumorphismBackButton,
} as Meta;

const NeumorphismBackButtonTemplate: Story = () => {
  return (
    <>
      <NeumorphismBackButton />
    </>
  );
};

export const BackButton = NeumorphismBackButtonTemplate.bind();
