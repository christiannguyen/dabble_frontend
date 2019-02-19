import React, { } from 'react';
import styled from 'styled-components';

const ActivityCardContainer = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #f5f5f5;
`;

const ActivityCard = (props) => {
  const { title, category, } = props;
  return (
    <ActivityCardContainer>
      <p>{title}</p>
      <p>{category}</p>
    </ActivityCardContainer>
  )
}

export default ActivityCard;
