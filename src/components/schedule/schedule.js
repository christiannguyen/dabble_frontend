import React from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
  border-left: 1px solid #e0e0e0;
  background-color: #fff;
  width: calc(100% - 75% - 75px);
  height: 100%;
`;

function Schedule() {
  return (
    <ScheduleContainer />
  )
}

export default Schedule;
