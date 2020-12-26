import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  SwitchButton,
  SwitchPanel as SwitchPanelComponent,
  SwitchKnob as SwitchKnobComponent,
  SwitchProps,
  SwitchPanelProps,
  SwitchKnobProps,
} from "../components/Switch";

export default {
  title: "components/Buttons/Switch",
  component: SwitchButton,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} as Meta;

const SwitchPanelTemplate: Story<SwitchPanelProps> = (args) => (
  <SwitchPanelComponent {...args}></SwitchPanelComponent>
);

const SwitchKnobTemplate: Story<SwitchKnobProps> = (args) => (
  <SwitchKnobComponent {...args} />
);
const SwitchButtonTemplate: Story<SwitchProps> = (args) => (
  <SwitchButton {...args} />
);

export const Switch = SwitchButtonTemplate.bind({});
Switch.argTypes = {
  knobColor: { control: "color" },
  shadowColor: { control: "color" },
  animationTrigger: { control: "boolean" },
};

Switch.args = {
  knobColor: "#257888",
  shadowColor: "#535050",
};

export const SwitchPanel = SwitchPanelTemplate.bind({});
SwitchPanel.argTypes = {
  shadowColor: { control: "color" },
  knobColor: { table: { disable: true } },
  animationTrigger: { table: { disable: true } },
};
SwitchPanel.args = {
  shadowColor: "#535050",
};

export const SwitchKnob = SwitchKnobTemplate.bind({});
SwitchKnob.argTypes = {
  knobColor: { control: "color" },
  animation: { control: "boolean" },
  shadowColor: { table: { disable: true } },
  animationTrigger: { table: { disable: true } },
};

SwitchKnob.args = {
  knobColor: "#257888",
  animation: true,
};
