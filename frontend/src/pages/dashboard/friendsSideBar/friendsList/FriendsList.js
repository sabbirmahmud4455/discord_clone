import styled from '@emotion/styled'
import React from 'react'
import { connect } from 'react-redux'
import FriendsListItem from './FriendsListItem'

const MainContainer = styled('div')({
	flexGrow: 1,
	width: "100%",
})

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
	friends.forEach(f => {
		const isUsersOnline = onlineUsers.find((user) => user.userId === f.id);

		f.isOnline = isUsersOnline ? true : false;
	})

	return friends;
}

const FriendsList = ({friends, onlineUsers}) => {
  return (
	<MainContainer>
		{checkOnlineUsers(friends, onlineUsers).map(friend => (
			<FriendsListItem 
				userName= {friend.username}
				id= {friend.id}
				key= {friend.id}
				isOnline= {friend.isOnline}
			/>
		))};
		
		
	</MainContainer>
  )
}

const getStoreToProps = ({friends}) => {
	return {
		...friends,
	}
}

export default connect(getStoreToProps)(FriendsList)