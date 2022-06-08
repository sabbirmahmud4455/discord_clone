import styled from "@emotion/styled";
import React from "react"
import AppBar from "./appBar/AppBar";
import FriendsSideBar from "./friendsSideBar/FriendsDSideBar";
import Messenger from "./messenger/Messenger";
import SideBar from "./sideBar/SideBar";

const Wrapper = styled('div')({
	width: '100%',
	height: '100vh',
	display: 'flex'
})

const DashboardPage = () => {
	return (
		<Wrapper>
			<SideBar/>
			<FriendsSideBar/>
			<Messenger/>
			<AppBar/>
		</Wrapper>
	)
}

export default DashboardPage;