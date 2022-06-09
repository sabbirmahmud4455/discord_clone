import React from 'react';
import styled from '@emotion/styled';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './friendsList/FriendsList';
import PendingInvitationsList from './pendingInvitationsList/PendingInvitationsList';

const MainContainer = styled('div')({
	width: "224px",
	height: "100%",
	display: "flex",
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: "#2F3136" 
})

const FriendsDSideBar = () => {
  return (
	<MainContainer>
		<AddFriendButton/>
		<FriendsTitle title="private Messages" />
		<FriendsList />
		<FriendsTitle title="Invitations" />
		<PendingInvitationsList/>
	</MainContainer>
  )
}

export default FriendsDSideBar;