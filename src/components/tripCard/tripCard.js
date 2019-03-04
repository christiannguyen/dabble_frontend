import React from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';

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

class TripCard extends React.Component {
  render() {
    const { newTrip } = this.props;
    return (
      <React.Fragment>
        <TripCardContainer>
          <Location>New York</Location>
        </TripCardContainer>
        {/* <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        /> */}
      </React.Fragment>
    )
  }
}

export default TripCard;
