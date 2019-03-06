import React from 'react';
import styled from 'styled-components';
import DaySchedule from '../../components/daySchedule/daySchedule';

const CalendarViewWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const CalendarView = () => (
  <CalendarViewWrapper>
    <DaySchedule />
    <DaySchedule />
    <DaySchedule />

  </CalendarViewWrapper>
);

export default CalendarView;
