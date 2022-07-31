import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { getDirectChatHistory } from '../../../realTimeCommunication/socketConnection'
import Messages from './messages/Messages'
import NewMessageInput from './NewMessageInput'


const Wrapper = styled('div')({
	flexGrow: 1,

})



const MessengerContent = ({chosenChatDetails}) => {
	useEffect(()=> {
		//todo


		//fetching chat history from specific user id
		getDirectChatHistory({
			receiverUserId: chosenChatDetails.id,
		});

	}, [chosenChatDetails])

  return (
	<Wrapper>
		<Messages/>
		<NewMessageInput chosenChatDetails={chosenChatDetails}/>
	</Wrapper>
  )
}


export default MessengerContent