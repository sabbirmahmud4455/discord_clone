import React from 'react'
import styled from '@emotion/styled';
import {connect} from 'react-redux';
import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';

const MainContainer = styled('div')({
	flexGrow: 1,
	display: "flex",
	backgroundColor: "#36393f",
	marginTop: '48px'
})


const Messenger = ({chosenChatDetails}) => {	
  return (
	<MainContainer>
		{!chosenChatDetails ? (<WelcomeMessage/>) : <MessengerContent chosenChatDetails={chosenChatDetails} />}
	</MainContainer>
  )
}

const mapStoreStateToProps = ({chat}) => {
	return {
		...chat
	}
}

export default connect(mapStoreStateToProps)(Messenger)