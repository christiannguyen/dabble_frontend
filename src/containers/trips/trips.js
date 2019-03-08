import React, { useEffect } from 'react';
import styled from 'styled-components';
import TripCard from 'components/tripCard/tripCard';
import NewTripCard from 'components/newTripCard/newTripCard';
import { bindActionCreators } from 'redux';
import { selectTripDates, createNewTrip, selectLocation, getUsersTrips } from 'duck/trips/actions';
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
    props.getUsersTrips();
  }, []);

  const { newTripDetails, selectTripDates, selectLocation, createNewTrip, usersTrips } = props;
  const { isLoading, trips } = usersTrips;

  if (isLoading) {
    return null;
  }

  console.log('trips', trips);
  return (
    <TripsContainer>
      <MyTripsContainer>
        {trips.map((trip) => {
          const { location, start_date: startDate, end_date: endDate, short_url: shortUrl } = trip;
          return (
            <TripCard location={location} startDate={startDate} endDate={endDate} shortUrl={shortUrl} />
          );
        })}
        <TripCard />
        <NewTripCard
          newTripDetails={newTripDetails}
          selectTripDates={selectTripDates}
          createNewTrip={createNewTrip}
          selectLocation={selectLocation}
        />
      </MyTripsContainer>
    </TripsContainer>
  );
}

const mapStateToProps = state => ({
  newTripDetails: state.newTripDetails,
  usersTrips: state.usersTrips,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    selectTripDates,
    createNewTrip,
    selectLocation,
    getUsersTrips,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
