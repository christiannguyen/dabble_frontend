import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const DropdownContainer = styled.div`

`;

const DropdownHeader = styled.div`

`;

const DropdownList = styled.div`
  overflow-y: scroll;
  height: 200px;
  max-height: 175px;
  position: relative;
  border: 1px solid black;
  width: 200px;
  position: absolute;
  background-color: white;
  z-index: 100001;
  visibility: ${props => props.opened ? "initial" : "hidden" };
`;

const DropdownListItem = styled.li`
  list-style-type: none;
  padding-left: 5px;
  height: 35px;
  &:hover {
    background: gray;
  }
`;

const DropdownUnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const times = [
  {
    title: '12:00am',
    value: '00:00',
  },
  {
    title: '12:15am',
    value: '00:15',
  },
  {
    title: '12:30am',
    value: '00:30',
  },
  {
    title: '12:45am',
    value: '00:45',
  },
  {
    title: '01:00am',
    value: '01:00',
  },
  {
    title: '01:15am',
    value: '01:15',
  },
  {
    title: '01:30am',
    value: '01:30',
  },
  {
    title: '01:45am',
    value: '01:45',
  },
  {
    title: '12:30am',
    value: '',
  },
  {
    title: '12:30am',
    value: '',
  },
  {
    title: '12:30am',
    value: '',
  },
  {
    title: '12:30am',
    value: '',
  },
  {
    title: '12:30am',
    value: '',
  },
]


class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.dropdownListRef =  React.createRef()
    this.dropdownHeaderRef = React.createRef();
    this.dropdownListWrapperRef = React.createRef();
    this.selectedItemRef = React.createRef();
  }
  // const [opened, setOpened] = useState(false);
  // const dropdownListRef = useRef(null);
  // const dropdownHeaderRef = useRef(null);
  // const dropdownListWrapperRef = useRef(null);
  // const selectedItemRef = useRef(null);
  // const [selectedTime, setTime] = useState('01:30am');

  handleItemClick(event, title, props) {
    event.preventDefault();
    console.log('item click', props);
    setTime(title);
    props.setActivityTime({

    })
    // setOpened(false);
  }

  handleOpen() {
    const selectedEl = document.getElementById(selectedTime);
    selectedEl.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
  });
    // setOpened(true);
  }

  handleClickOutside(event) {
    // console.log('hit event', event.target)
    if (!dropdownHeaderRef.current.contains(event.target) && !dropdownListWrapperRef.current.contains(event.target)) {
      // setOpened(false);
      console.log('You clicked outside of me!');
    }
  }
  render() {
    return (
      <DropdownContainer>
        <DropdownHeader ref={dropdownHeaderRef} onClick={handleOpen}>{selectedTime}</DropdownHeader>

          <DropdownList opened={opened} ref={dropdownListWrapperRef}>
            <DropdownUnorderedList aria-labeled="yes" ref={dropdownListRef}>
            {times.map((time) => (
              <DropdownListItem id={time.title} onClick={(e) => handleItemClick(e, time.title, props)}>
                {time.title}
              </DropdownListItem>
            ))}
            </DropdownUnorderedList>
          </DropdownList>
      </DropdownContainer>
    )
  }
}

export default Dropdown;
// !this.wrapperRef.contains(event.target)
