import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import MessagesHeader from './MessagesHeader';
import Message from './Message';
import moment from "moment"
import DateSeparator from './DateSeparator';

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

})

const Messages = ({chosenChatDetails, messages}) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chosenChatDetails, messages]);
  
  return (
	<MainContainer >
    <MessagesHeader name={chosenChatDetails?.name} />
    { messages.map((message, index) => {


      const sameAuthor = index > 0 && messages[index].author._id === messages[index - 1].author._id;
      const sameDay = index > 0 && moment(messages[index].date).format("YYYY-MM-DD") === moment(messages[index - 1].date).format("YYYY-MM-DD");

      return (
        <> 
          {(!sameDay || index === 0) && (
            <DateSeparator
              date={moment(message.date).format("DD-MM-YYYY")}
            />
          )}

          <Message
            key={message._id}
            content={message.content}
            username={message.author.username}
            sameAuthor={sameAuthor}
            date={moment(messages[index].date).format("DD-MM-YYYY")}
            sameDay={sameDay}
          
          />
        </>

      )
    })}

  <div ref={messagesEndRef} />

  </MainContainer>
  )
}

const mapStoreStateToProps = ({chat}) => {
    return {
      ...chat
    }
}

export default connect(mapStoreStateToProps)(Messages)