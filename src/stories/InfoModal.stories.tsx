import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  ModalBoxBackground as ModalBoxBackgroundComponent,
  TabBar as TabBarComponent,
  Tab as TabComponent,
  ContentBox as ContentBoxComponent,
  InfoModal as InfoModalComponent,
  TabProps,
} from "../components/InfoModal";

export default {
  title: "components/Modal/InfoModal",
  component: ModalBoxBackgroundComponent,
  argTypes: {
    as: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
} as Meta;

const ModalBoxBackgroundTemplate: Story = () => <ModalBoxBackgroundComponent />;

const TabBarTemplate: Story = () => <TabBarComponent />;

const TabTemplate: Story<TabProps> = (args) => (
  <TabComponent {...args}>{args.tabName}</TabComponent>
);

const ContentBoxTemplate: Story = () => (
  <ContentBoxComponent>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
    et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
    delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
    amet,
  </ContentBoxComponent>
);

const ModalTemplate: Story = () => <InfoModalComponent></InfoModalComponent>;

export const ModalBoxBackground = ModalBoxBackgroundTemplate.bind();

export const TabBar = TabBarTemplate.bind();

export const Tab = TabTemplate.bind();
Tab.argTypes = { tabName: { control: "text" } };
Tab.args = { active: false, tabName: "Tab1" };

export const TabActive = TabTemplate.bind();
TabActive.argTypes = {
  tabName: { table: { disable: true } },
  active: { table: { disable: true } },
};
TabActive.args = { tabName: "Tab1", active: "Tab1" };

export const ContentBox = ContentBoxTemplate.bind();

export const WholeModal = ModalTemplate.bind();
