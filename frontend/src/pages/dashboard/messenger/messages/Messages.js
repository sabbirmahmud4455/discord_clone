import styled from '@emotion/styled'
import React from 'react';
import { connect } from 'react-redux';
import MessagesHeader from './MessagesHeader';

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

})

const Messages = ({chosenChatDetails, messages}) => {
  return (
	<MainContainer>
    <MessagesHeader name={chosenChatDetails?.name} />
  </MainContainer>
  )
}

const mapStoreStateToProps = ({chat}) => {
    return {
      ...chat
    }
}

export default connect(mapStoreStateToProps)(Messages)