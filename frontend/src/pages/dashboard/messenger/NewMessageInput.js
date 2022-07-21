import React, { useState } from 'react';
import {styled} from '@mui/material';
import {connect} from 'react-redux';

const MainContainer = styled('div')({
  height: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Input = styled('input')({
  backgroundColor: '#2f3136',
  width: '98%',
  height: '44px',
  color: 'wheat',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0 10px'
})

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState('');

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  }

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  const handleSendMessage = () => {
    console.log('sending message to the server');
    setMessage('');
  }

  return (
	<MainContainer>
    <Input
      placeholder={`Write Message to ${chosenChatDetails.name}`}
      value={message}
      onChange={handleMessageValueChange}
      onKeyDown={handleKeyPressed}
    />
  </MainContainer>
  )
}

const mapStoreStateToProps = ({chat}) => {
  return {...chat}
}

export default connect(null ,mapStoreStateToProps)(NewMessageInput)