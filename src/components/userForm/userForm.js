import React, { useState }from 'react';
import styled from 'styled-components';
import { basePost, baseGet } from 'libs/api';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`

const UserFormContainer = styled.div`
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid black;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const InputFields = styled.input`
  width: 300px;
  border-radius: 20px;
  border: none;
  margin: 10px;
  padding: 5px 10px;
  background-color: #D9E8FD;
`;

const SubmitButton = styled.button`
  width: 300px;
  border-radius: 20px;
`;

function UserForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register } = props

  function handleSubmit() {
    const url = register ? 'api/register' : 'api/login'
    basePost(url, { username, password })
  };

  function test() {
    baseGet('api/trip');
  }

  return (
    <PageContainer>
      <UserFormContainer>
        <p>{username} {password}</p>
        <InputFields name="username" onChange={(e) => setUsername(e.target.value)}/>
        <InputFields name="password" onChange={(e) => setPassword(e.target.value)}/>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        <button onClick={test}>another</button>
      </UserFormContainer>
    </PageContainer>
  )
}

export default UserForm;
