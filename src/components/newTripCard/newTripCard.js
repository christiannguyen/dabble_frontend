import React from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';
import Select, { createFilter } from 'react-select';
import './newTripCard.css';

const CardContainer = styled.div`
  padding: 5px;
  width: 300px;
  height: 150px;
  border: 2px solid #c4c4c4;
  border-radius: 10px;
  background-color: #fff;
  color: #c4c4c4;
  transition: all 0.5s ease;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const NewTripCardContainer = styled(CardContainer)`
  /* box-shadow: 0 4px 10px rgba(0,0,0,0.2); */
  border: 2px dotted #c4c4c4;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #ababab;
    color: #ababab;
  }
`;

const TopRow = styled.div`
  display: flex;
`;

const CancelButton = styled.div`
  color: #c4c4c4;
  width: 20px;
  margin-left: auto;
  padding: 5px;
  &:hover {
    color: #000;
  }
`;

const CreateTripButton = styled.button`
  /* background-color: #7f7b92; */
  align-self: center;
  border-radius: 10px;
  color: #fff;
  width: 250px;
  background-color: blue;
`;

const options = [
  { value: 'San Diego, CA', label: 'San Diego, CA' },
  { value: 'San Jose, CA', label: 'San Jose, CA' },
  { value: 'Los Angeles, CA', label: 'Los Angeles, CA' },
  { value: 'Berkeley, CA', label: 'Berkeley, CA' },
  { value: 'California', label: 'California, USA' },
  { value: 'New York City, NY', label: 'New York City, NY' },
  { value: 'New York, USA', label: 'New York, USA' },
];

class NewTripCard extends React.Component {
  state = {
    isCreating: false,
    focusedInput: null,
  }

  handleCardClick = () => {
    this.setState({
      isCreating: true,
    });
  }

  handleCancel = () => {
    this.setState({
      isCreating: false,
    });
  }

  handleDateChange = ({ startDate, endDate }) => {
    const { selectTripDates } = this.props;

    selectTripDates({
      startDate,
      endDate,
    });
  }

  render() {
    const { newTripDetails: { startDate, endDate } } = this.props;
    const { isCreating, focusedInput } = this.state;
    return (
      <div>
        {isCreating
          ? <CardContainer>
            <TopRow>
              <Select
                className="location-select-container"
                classNamePrefix="location-select"
                placeholder="Where do you want to go?"
                options={options}
                autoFocus
              />
              <CancelButton onClick={this.handleCancel}>X</CancelButton>
            </TopRow>
            <DateRangePicker
              startDate={startDate}
              startDateId="your_unique_start_date_id"
              endDate={endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={this.handleDateChange}
              focusedInput={focusedInput} //
              onFocusChange={newFocusInput => this.setState({ focusedInput: newFocusInput })}
            />
            <CreateTripButton>Add Trip</CreateTripButton>
            </CardContainer>
          : <NewTripCardContainer
            onClick={this.handleCardClick}
          >
           + New Trip
            </NewTripCardContainer>
      }
      </div>
    );
  }
}

export default NewTripCard;
