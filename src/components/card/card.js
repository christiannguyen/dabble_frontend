import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #f2f2f2;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`

const DescriptionContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
`

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Type = styled.p`

`;

const Address = styled.p`

`;

function Card(props) {
  return (
    <CardContainer>
      <ImageContainer />
      <DescriptionContainer>
        <Title>Cafe Play</Title>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default Card;
