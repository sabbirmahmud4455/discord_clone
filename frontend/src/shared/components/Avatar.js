import styled from '@emotion/styled'
import React from 'react'


const AvatarPreview = styled('div')({
	minHeight: "42px",
	minWidth: "42px",
	backgroundColor: "#5865f2",
	borderRadius: "42px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "20px",
	marginLeft: "5px",
	color: "wheat"
})

const Avatar = ({userName, large}) => {
  return (
	<AvatarPreview
		style={large ? {height: '80px', width: '80px'} : {}}
	>
		{userName.substring(0,2)}
	</AvatarPreview>
  )
}

export default Avatar