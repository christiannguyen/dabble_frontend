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

const NewTripCardContainer = styled.div`
  /* box-shadow: 0 4px 10px rgba(0,0,0,0.2); */
  width: 300px;
  height: 150px;
  border: 2px dotted #c4c4c4;
  border-radius: 10px;
  color: #c4c4c4;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  &:hover {
    border-color: #ababab;
    color: #ababab;
  }
`;


class TripCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    const { newTrip } = this.props;
    return (
      <React.Fragment>
        {newTrip ?
          <NewTripCardContainer>+ New Trip</NewTripCardContainer> :
          <TripCardContainer>Hello</TripCardContainer>
        }
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
      </React.Fragment>
    )
  }
}

export default TripCard;
