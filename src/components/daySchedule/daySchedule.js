import React from 'react';
import styled from 'styled-components';
import ScheduleItem from '../scheduleItem/scheduleItem';

const DaySchedulerWrapper = styled.div`
  width: 33%;
  height: calc(100vh - 100px);
  /* background-color: white; */
  overflow-y: scroll;
  border-left: 1px solid #ece9f2;
`;

const DaySchedule = () => (
  <DaySchedulerWrapper>
    <ScheduleItem />
    <ScheduleItem />

  </DaySchedulerWrapper>
);

export default DaySchedule;
