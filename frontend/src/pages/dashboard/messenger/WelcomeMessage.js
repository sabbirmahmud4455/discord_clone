import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const Wrapper = styled('div')({
	flexGrow:1,
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
})

const WelcomeMessage = () => {
  return (
	<Wrapper>
		<Typography
			variant='h6'
			sx={{color: 'white'}}
		>
			To Start chatting - choose conversation
		</Typography>
	</Wrapper>
  )
}

export default WelcomeMessage