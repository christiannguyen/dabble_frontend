import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from 'components/dropdown/dropdown';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  padding: 50px;
`;

const ModalContainer = styled.div`
  position: fixed;
  background: #fff;
  width: 600px;
  height: 600px;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const ImageContainer = styled.div`

`;

const AddToTripButton = styled.button`

`;




function addToTrip(props) {
  console.log('helllo', props);
};

class AddActivityModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focusedInput: null,
    };
  }
  render() {
    console.log('date', this.state.date);
  return (
    <Backdrop>
      <ModalContainer>
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
      />
        {/* <AddToTripButton onClick={addToTrip.bind(null, props)}>Add</AddToTripButton> */}
        <Dropdown />
        <p>hello</p>
      </ModalContainer>
    </Backdrop>
  )
  }
}

export default AddActivityModal;
