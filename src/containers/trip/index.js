import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AddActivityButton from 'components/addActivityButton/addActivityButton';
import Activity from 'components/activity/activity';
import ActivitySearch from 'containers/activitySearch';

const TripContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const MainViewContainer = styled.div`
  width: calc(100% - 50px);
`;

const SidebarContainer = styled.div`
  width: 300px;
  background-color: #fff;
  height: 100vh;
`

const MyTripsContainer = styled.div`
  width: 1000px;
  height: 400px;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
`;

const Trip = () => {
  // useEffect(() => {
  //   baseGet('api/trip');
  // }, [])

  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <TripContainer>
        <SidebarContainer>
          <AddActivityButton/>
        </SidebarContainer>
        <MainViewContainer><ActivitySearch/></MainViewContainer>
      </TripContainer>
    </DragDropContextProvider>
  )
}

export default Trip;
