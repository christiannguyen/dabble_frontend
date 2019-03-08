import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AddActivityButton from 'components/addActivityButton/addActivityButton';
import Activity from 'components/activity/activity';
import ActivitySearch from 'containers/activitySearch/activitySearch';
import AddActivityModal from 'components/addActivityModal/addActivityModal';
import CalendarView from 'containers/calendarView/calendarView';
import { getSelectedTrip } from 'duck/trips/actions';
import { baseGet } from 'libs/api';
import TripHeader from 'components/tripHeader/tripHeader';

const TripWrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const MainViewContainer = styled.div`
  width: calc(100% - 70px);
`;

const SidebarContainer = styled.div`
  width: 70px;
  background-color: blue;
  height: 100vh;
`;

const Trip = (props) => {
  const { selectedTrip, match, getSelectedTrip } = props;

  useEffect(() => {
    getSelectedTrip(match.params.slug);
  }, []);

  if (selectedTrip.isLoading) {
    return null;
  }
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      {/* <AddActivityModal actionCreators={props.actionCreators} activityTimes={props.activityTimes}/> */}
      <TripWrapper>
        <SidebarContainer />
        <MainViewContainer>
          <TripHeader />
          <CalendarView />
          {/* <ActivitySearch /> */}
        </MainViewContainer>
      </TripWrapper>
    </DragDropContextProvider>
  );
};


const mapStateToProp = state => ({
  selectedTrip: state.selectedTrip,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getSelectedTrip,
  }, dispatch),
});

export default connect(mapStateToProp, mapDispatchToProps)(Trip);
