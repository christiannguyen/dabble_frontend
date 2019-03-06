import React from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';

const TripCardContainer = styled.div`
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  background: #fff;
  width: 300px;
  height: 150px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin: 5px;
`;

const Location = styled.p`

`;

const TripCard = (props) => {
  const { location, startDate, endDate, shortUrl } = props;

  function handleClick() {
    console.log('shorturl', shortUrl);
  }
  return (
    <Link to={`/trip/${shortUrl}`}>
      <TripCardContainer onClick={handleClick}>
        <Location>{location}</Location>
      </TripCardContainer>
    </Link>
  );
}

export default TripCard;
