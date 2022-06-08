import styled from '@emotion/styled'
import React from 'react'
import MainPageButton from './MainPageButton'

const MainContainer = styled('div')({
	width: "72px",
	height: "100%",
	display: "flex",
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: "#203325" 
})

const SideBar = () => {
  return (
	<MainContainer>
		<MainPageButton />
	</MainContainer>
  )
}

export default SideBar