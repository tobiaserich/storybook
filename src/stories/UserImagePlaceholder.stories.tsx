import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { UserImagePlaceholder as UserImagePlaceholderComponent } from "../components/UserImagePlaceholder";

export default {
  title: "components/images/User Image Placeholder",
  component: UserImagePlaceholderComponent,
  argTypes: {},
} as Meta;

const UserImagePlaceholderTemplate: Story = () => (
  <UserImagePlaceholderComponent />
);

export const UserImagePlaceholder = UserImagePlaceholderTemplate.bind();
