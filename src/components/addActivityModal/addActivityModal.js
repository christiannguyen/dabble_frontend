import 'rc-time-picker/assets/index.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

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

const Title = styled.p`

`;

const Type = styled.p`

`;

const LabeledInputsWrapper = styled.div`
  display: flex;
`;

const TimeWrapper = styled.div`
  width: 400px;
  border-radius: 10px;
  height: 200px;
  background-color: #f5f5f5;
  display: block;
  /* flex-direction: column; */
`;

const AddToTripButton = styled.button`

`;

const CancelAction = styled.p`
  color: red;
  font-weight: bold;
`;



function addToTrip(props) {
  console.log('helllo', props);
};

const format = 'h:mm a';

const FROM_DEFAULT_TIME = moment().hour(10).minute(0);
const TO_DEFAULT_TIME = moment().hour(11).minute(0);

class AddActivityModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focusedInput: null,
    };
  }

  selectDate = (value) => {
    const { setActivityTime } = this.props.actionCreators;
    console.log('props from selectFromTime, data', this.props);
    setActivityTime({
      date: value,
    })
  }

  selectFromTime = (value)  => {
    const { setActivityTime } = this.props.actionCreators;
    console.log('props from selectFromTime, data', this.props);
    setActivityTime({
      from: value,
    })
  }

  selectToTime = (value)  => {
    const { setActivityTime } = this.props.actionCreators;
    console.log('props from selectFromTime, data', this.props);
    setActivityTime({
      to: value,
    })
  }

  test = () => {
    const { activityTimes } = this.props;
    const { from, date, to } = activityTimes;
    if (from && date && to) {

      const fromDate = moment(date);
      const toDate = moment(date);
      const fromHour = from.get('hour');
      const fromMinute = from.get('minute');
      console.log('fromHour, fromMinute', fromHour, fromMinute)
      fromDate.set({
        'hour': fromHour,
        'minute': fromMinute,
      })
      console.log('fromDate', fromDate);
    }
  }

  render() {
    const { activityTimes: { from, to, date } } = this.props;


    this.test()
    return (
      <Backdrop>
        <ModalContainer>
          <Title>Cafe Bloop</Title>
          <Type>Breakfast</Type>
          <TimeWrapper>
            <SingleDatePicker
              placeholder={"Select Date"}
              date={date} // momentPropTypes.momentObj or null
              onDateChange={this.selectDate} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              id="activity-date-picker"
            />
            <LabeledInputsWrapper>
              <p>From:</p>
              <TimePicker
                showSecond={false}
                defaultValue={from}
                className="time-picker-from"
                onChange={this.selectFromTime}
                format={format}
                use12Hours
                inputReadOnly
                minuteStep={15}
              />
            </LabeledInputsWrapper>
            <LabeledInputsWrapper>
              <p>To:</p>
              <TimePicker
                showSecond={false}
                defaultValue={to}
                className="time-picker-to"
                onChange={this.selectToTime}
                format={format}
                use12Hours
                inputReadOnly
                minuteStep={15}
              />
            </LabeledInputsWrapper>
            </TimeWrapper>

          <CancelAction>Cancel</CancelAction>
          {/* <AddToTripButton onClick={addToTrip.bind(null, props)}>Add</AddToTripButton> */}
        </ModalContainer>
      </Backdrop>
    )
  }
}

export default AddActivityModal;
