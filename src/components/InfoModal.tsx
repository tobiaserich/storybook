import React from "react";
import styled from "@emotion/styled";
import { ExitButton } from "./Button";

export type TabProps = {
  tabname: string;
  active: string;
  last?;
};

export const ModalBoxBackground = styled("div")`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7e5b5;
  border-radius: 10px;
  height: 500px;
  width: 300px;
  padding: 3px 3px;
`;

export const TabBar = styled("nav")`
  width: 300px;
  display: flex;
  justify-content: space-around;
  height: 40px;
  background-color: #f7e5b5;
  border-radius: 10px;
`;

export const Tab = styled("button")<TabProps>`
  display: inline-block;
  height: 40px;
  min-width: 100px;
  max-width: 300px;
  width: 100%;
  background-color: ${({ tabName, active }) =>
    tabName === active ? "#FCF5E3" : "#F7e5b5"};
  margin: 0;
  border: none;
  border-radius: ${({ last }) =>
    last ? "0px 7px 0px 0px" : "7px 0px 0px 0px"};
`;

export const ContentBox = styled("article")`
  max-width: 300px;
  height: 460px;
  border-radius: 0px 0px 8px 8px;
  overflow: auto;
  padding-left: 2px;
  padding-right: 3px;
  scrollbar-color: #F7e5b5 #FCF5E3;
  }};
`;

export const InfoModal: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");

  return (
    <ModalBoxBackground>
      <ExitButton modal>X</ExitButton>
      <TabBar>
        <Tab
          tabName="tab1"
          active={activeTab}
          onClick={() => setActiveTab("tab1")}
        >
          Tab1
        </Tab>
        <Tab
          tabName="tab2"
          active={activeTab}
          onClick={() => setActiveTab("tab2")}
          last
        >
          Tab2
        </Tab>
      </TabBar>
      <ContentBox>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
        hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
        te feugait nulla facilisi. Lorem ipsum dolor sit amet,
      </ContentBox>
    </ModalBoxBackground>
  );
};
