import React, { useEffect } from 'react';
import styled from 'styled-components';
import { baseGet } from 'src/services/api';

const SidebarContainer = styled.div`
  border-right: 1px solid #e0e0e0;
  width: 75px;
  height: 100%;
`;

function Sidebar() {

  useEffect(() => {
    baseGet('/test').then((data) => console.log('here you gohaa', data));
  }, [])

  return (
    <SidebarContainer />
  )
}

export default Sidebar;
