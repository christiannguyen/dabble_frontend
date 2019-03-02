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
`

const CreateTripButton = styled.button`
  /* background-color: #7f7b92; */
  align-self: center;
  width: 250px;
  background-color: blue;
`;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class NewTripCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false
    };
  }

  handleCardClick = () => {
    this.setState({
      isCreating: true,
    });
  }

  handleCancel = () => {
    this.setState({
      isCreating: false,
    })
  }

  render() {
    return (
      <div>
        {this.state.isCreating ?
          <CardContainer>
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
            <CreateTripButton>Add Trip</CreateTripButton>
          </CardContainer> :
          <NewTripCardContainer
            onClick={this.handleCardClick}
          >
           + New Trip
         </NewTripCardContainer>
      }
      </div>
    )
  }
}

export default NewTripCard;
