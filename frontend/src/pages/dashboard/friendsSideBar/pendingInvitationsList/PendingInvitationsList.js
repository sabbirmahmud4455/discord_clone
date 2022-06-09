import styled from '@emotion/styled'
import React from 'react'
import PendingInvitationsListItems from './PendingInvitationsListItems'


const DUMMY_INVITATIONS = [
	{
		_id: 1,
		senderId: {
			userName: 'john daa',
			mail: 'johndaa@mail.com'
		}
	},
	{
		_id: 2,
		senderId: {
			userName: 'Junkeer',
			mail: 'Junkeer@mail.com'
		}
	},
]

const MainContainer = styled('div')({
	width: "100%",
	height: "22%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "auto"

})

const PendingInvitationsList = () => {
  return (
	<MainContainer>
		{DUMMY_INVITATIONS.map(invitation => (
			<PendingInvitationsListItems
				key={invitation._id}
				id={invitation._id}
				userName= {invitation.senderId.userName}
				userMail= {invitation.senderId.mail}
			/>
		))}
	</MainContainer>
  )
}

export default PendingInvitationsList 