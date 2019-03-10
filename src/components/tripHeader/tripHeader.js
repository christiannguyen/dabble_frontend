import React from 'react'
import styled from 'styled-components'

const TripHeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  border-bottom: 1px solid #e8e8e8;
`

const TripHeader = ({ location, startDate, endDate }) => (
  <TripHeaderWrapper>
    <span>{location}</span>
  </TripHeaderWrapper>
)

export default TripHeader
