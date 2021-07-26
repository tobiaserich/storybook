import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NeumorphismStatBar } from "../components/NeumorphismStatBar";

export default {
  title: "components/Neumorphism",
  component: NeumorphismStatBar,
} as Meta;

const NeumorphismStatBarTemplate = () => (
  <>
    <NeumorphismStatBar percentage="30" shift="F25" color="235, 87, 87, 0.5" />
    <NeumorphismStatBar percentage="50" shift="S25" color="242, 201, 76, 0.5" />
    <NeumorphismStatBar percentage="30" shift="N25" color="45, 156, 219, 0.5" />
  </>
);

export const statBar = NeumorphismStatBarTemplate.bind();
