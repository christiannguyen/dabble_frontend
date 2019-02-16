import React, { useEffect } from 'react';
import styled from 'styled-components';
import { baseGet } from 'libs/api';
import TripCard from 'components/tripCard/tripCard';

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

const Trips = () => {
  useEffect(() => {
    baseGet('api/trip');
  }, [])

  return (
    <TripsContainer>
      <MyTripsContainer>
        <TripCard />
        <TripCard newTrip />
      </MyTripsContainer>
    </TripsContainer>
  )
}

export default Trips;
