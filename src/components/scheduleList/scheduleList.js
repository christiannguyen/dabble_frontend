import React from 'react';
import styled from 'styled-components';
import AddActivityButton from 'components/addActivityButton/addActivityButton';

const ScheduleListContainer = styled.div`
  background-color: green;
  width: 400px;
  height: 100px;
`;

function ScheduleList() {
  return (
    <ScheduleListContainer>
      <AddActivityButton />
    </ScheduleListContainer>
  )
}

export default ScheduleList;
