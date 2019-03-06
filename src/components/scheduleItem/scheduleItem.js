import React from 'react';
import styled from 'styled-components';

const ScheduleItemWrapper = styled.div`
  /* background-color: green; */
  width: 80%;
  margin: auto;
`;

const ActivityItemWrapper = styled.div`
  margin-left: 15px;
  display: flex;
`;

const ActivityTotalTime = styled.span`
  align-self: center;
  margin-right: 5px;
`;

const ActivityItem = styled.div`
  background-color: gray;
  flex: 1;
  border-radius: 10px;
  padding: 10px;
`;

const ActivitytTimes = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  ::after {
      content: '';
      margin-left: 10px;
      border-top: 1px solid;
      flex: 1 0 20px;
  }
`;

const ScheduleItem = () => (
  <ScheduleItemWrapper>
    <ActivitytTimes>10am</ActivitytTimes>
    <ActivityItemWrapper>
      <ActivityTotalTime>1hr</ActivityTotalTime>
      <ActivityItem>
        <p>Cafe Bloop</p>
        <span>Cafe</span>
      </ActivityItem>
    </ActivityItemWrapper>
    <ActivitytTimes>11am</ActivitytTimes>
  </ScheduleItemWrapper>
);

export default ScheduleItem;
