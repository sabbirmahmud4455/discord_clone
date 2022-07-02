import styled from '@emotion/styled'
import Avatar  from '../../../../shared/components/Avatar'
import React from 'react'
import { Typography } from '@mui/material'

const MainContainer = styled('div')({
	width: '98%',
	display: 'column',
	marginTop: '10px',
	alignItems: 'center'
})

const MessagesHeader = ({name = ''}) => {
  return (
	<MainContainer>
		<Avatar large userName={name}/>
		<Typography
			variant='h4'
			sx={{
				fontWeight: 'bold',
				color: 'white',
				marginLeft: '5px',
				marginRight: '5px'
			}}
		>
			{name}
		</Typography>
		<Typography
			sx={{
				fontWeight: 'bold',
				color: 'white',
				marginLeft: '5px',
				marginRight: '5px',
			}}
		>
			This is the beginning of your conversation with {name}
		</Typography>
	</MainContainer>
  )
}

export default MessagesHeader