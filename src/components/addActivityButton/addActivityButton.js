import React from 'react';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';

const Button = styled.button`
  padding: 10px;
  background-color: green;
  width: 200px;
  height: 100px;
  opacity: ${props => props.isDragging ? '0.5' : '1'};
  cursor: move;
`;

const buttonSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function AddActivityButton({ connectDragSource, isDragging }) {


  return connectDragSource(
    <button isDragging={isDragging}>+</button>
  )
}

export default DragSource("addActivityButton", buttonSource, collect)(AddActivityButton);
