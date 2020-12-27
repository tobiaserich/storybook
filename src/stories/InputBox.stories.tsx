import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Card as CardComponent,
  Heading as HeadingComponent,
  ScoreBoard as ScoreBoardComponent,
  InputField as InputFieldComponent,
  InputBox as InputBoxComponent,
  InputBoxWithKnob as InputBoxWithKnobComponent,
  ScoreBoardProps,
  InputBoxProps,
} from "../components/InputBox";

export default {
  title: "components/Input/InputBox",
  component: InputBoxComponent,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} as Meta;

const controls = {
  points: { control: { type: "inline-radio", options: [0, 1, 2, 3] } },
};

const defaultValue = { points: 0 };

const InputBoxTemplate: Story<InputBoxProps> = (args) => (
  <InputBoxComponent {...args} />
);

const InputBoxWithKnobTemplate: Story<JSX.Element> = () => (
  <InputBoxWithKnobComponent />
);

const CardTemplate: Story<JSX.Element> = () => <CardComponent />;

const HeadingTemplate: Story<JSX.Element> = () => (
  <HeadingComponent>Heading</HeadingComponent>
);

const ScoreBoardTemplate: Story<ScoreBoardProps> = (args) => (
  <ScoreBoardComponent {...args}>{args.points}</ScoreBoardComponent>
);

const InputFieldTemplate: Story<JSX.Element> = () => <InputFieldComponent />;

export const InputBox = InputBoxTemplate.bind({});
InputBox.argTypes = controls;
InputBox.args = defaultValue;
export const InputBoxWithKnob = InputBoxWithKnobTemplate.bind({});
export const Card = CardTemplate.bind({});
export const Heading = HeadingTemplate.bind({});
export const ScoreBoard = ScoreBoardTemplate.bind({});
ScoreBoard.argTypes = controls;
ScoreBoard.args = { points: 1 };

export const InputField = InputFieldTemplate.bind({});
