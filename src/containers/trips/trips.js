import React, { useEffect } from 'react';
import styled from 'styled-components';
import { baseGet } from 'libs/api';
import TripCard from 'components/tripCard/tripCard';
import NewTripCard from 'components/newTripCard/newTripCard';
import { bindActionCreators } from 'redux';
import { selectTripDates } from 'duck/trips/actions';
import { connect } from 'react-redux';

const TripsContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
`;

const MyTripsContainer = styled.div`
  width: 1000px;
  height: 400px;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
`;

const Trips = (props) => {
  useEffect(() => {
    baseGet('api/trip');
  }, []);

  const { actionCreators, newTripDetails } = props;
  const { selectTripDates } = actionCreators;

  console.log('hit trips after');
  return (
    <TripsContainer>
      <MyTripsContainer>
        <TripCard />
        <NewTripCard newTripDetails={newTripDetails} selectTripDates={selectTripDates} />
      </MyTripsContainer>
    </TripsContainer>
  );
}

const mapStateToProps = state => ({
  newTripDetails: state.newTripDetails,
});

const mapDispatchToProps = dispatch => ({
  actionCreators: {
    ...bindActionCreators({
      selectTripDates,
    }, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
