import styled from '@emotion/styled'
import React from 'react'
import FriendsListItem from './FriendsListItem'



const DUMMY_FRIENDS = [
	{
		id: 1,
		username: 'anna',
		isOnline: true,
	},
	{
		id: 2,
		username: 'jon',
		isOnline: false,
	},
	{
		id: 3,
		username: 'jesrun',
		isOnline: false,
	},
	{
		id: 1,
		username: 'mary',
		isOnline: true,
	},
]


const MainContainer = styled('div')({
	flexGrow: 1,
	width: "100%",
})

const FriendsList = () => {
  return (
	<MainContainer>
		{DUMMY_FRIENDS.map(friend => (
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

export default FriendsList