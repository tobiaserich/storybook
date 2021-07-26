import React from "react";
import styled from "@emotion/styled";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NeumorphismWeekdayContainer } from "../components/NeumorphismWeekdayContainer";
import { NeumorphismCalendarDayDisplay } from "../components/NeumorphismCalendarDayDisplay";

export default { title: "components/Neumorphism" };

const GridContainer = styled("div")`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(7, 30px);
  column-gap: 10px;
  row-gap: 10px;
`;

const NeumorphismFullCalendarTemplate: Story = () => {
  const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  const shifts = [
    "x",
    "S25",
    "F25",
    "x",
    "S25",
    "Z25n",
    "S25",
    "N25",
    "N25",
    "x",
    "x",
    "x",
    "S2P",
    "S25",
    "Z25n",
    "Z25n",
    "x",
    "x",
    "Z25n",
    "Z25n",
    "Z25n",
    "F25",
    "x",
    "F25",
    "S25",
    "F25",
    "F25",
    "N25",
    "N25",
    "x",
  ];

  return (
    <GridContainer>
      {weekdays.map((weekday) => {
        return (
          <NeumorphismWeekdayContainer key={weekday}>
            {weekday}
          </NeumorphismWeekdayContainer>
        );
      })}

      {shifts.map((shift, index) => {
        return (
          <NeumorphismCalendarDayDisplay
            key={`${index}${shift}`}
            day={index + 1}
            shift={shift}
          />
        );
      })}
    </GridContainer>
  );
};

export const FullCalendar = NeumorphismFullCalendarTemplate.bind();
