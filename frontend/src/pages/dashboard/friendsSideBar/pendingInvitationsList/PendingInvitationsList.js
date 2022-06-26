import styled from '@emotion/styled'
import React from 'react'
import PendingInvitationsListItems from './PendingInvitationsListItems'
import { connect } from 'react-redux';

const MainContainer = styled('div')({
	width: "100%",
	height: "22%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "auto"

})

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
  return (
	<MainContainer>
		{pendingFriendsInvitations.map(invitation => (
			<PendingInvitationsListItems
				key={invitation._id}
				id={invitation._id}
				userName= {invitation.senderId.username}
				userMail= {invitation.senderId.mail}
			/>
		))}
	</MainContainer>
  )
}

const mapStoreStateToProps = ({ friends }) => {
	return {
		...friends,
	}
}

export default connect(mapStoreStateToProps) (PendingInvitationsList)