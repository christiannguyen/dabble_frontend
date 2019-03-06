import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AddActivityButton from 'components/addActivityButton/addActivityButton';
import Activity from 'components/activity/activity';
import ActivitySearch from 'containers/activitySearch/activitySearch';
import AddActivityModal from 'components/addActivityModal/addActivityModal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActivityTime } from 'duck/activities/actions';
import CalendarView from 'containers/calendarView/calendarView';
import TripHeader from '../../components/tripHeader/tripHeader';

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

const MyTripsContainer = styled.div`
  width: 1000px;
  height: 400px;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
`;

const Trip = (props) => {
  // useEffect(() => {
  //   baseGet('api/trip?');
  // }, [])

  console.log('trip pop', props);
  console.log('slug', props.match.params.slug)
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
  activityTimes: state.activityTimes,
});

const mapDispatchToProps = dispatch => ({
  actionCreators: {
    ...bindActionCreators({
      setActivityTime,
    }, dispatch),
},
});

export default connect(mapStateToProp, mapDispatchToProps)(Trip);
