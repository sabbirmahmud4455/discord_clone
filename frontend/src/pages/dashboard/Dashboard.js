import styled from "@emotion/styled";
import React, { useEffect } from "react"
import { logout } from "../../shared/utils/auth";
import AppBar from "./appBar/AppBar";
import FriendsSideBar from "./friendsSideBar/FriendsDSideBar";
import Messenger from "./messenger/Messenger";
import SideBar from "./sideBar/SideBar";
import { connect } from 'react-redux';
import { getActions } from "../../store/actions/authActions";
import { ConnectWithSocketServer } from "../../realTimeCommunication/socketConnection";

const Wrapper = styled('div')({
	width: '100%',
	height: '100vh',
	display: 'flex'
})

const DashboardPage = ({setUserDetails}) => {

	useEffect(()=> {
		const userDetails = localStorage.getItem('user');

		if (!userDetails) {
			logout();
		} else {
			setUserDetails(JSON.parse(userDetails));
			ConnectWithSocketServer(JSON.parse(userDetails));
		}

	}, [])


	return (
		<Wrapper>
			<SideBar/>
			<FriendsSideBar/>
			<Messenger/>
			<AppBar/>
		</Wrapper>
	)
}

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch)
	}
}

export default connect(null, mapActionsToProps)(DashboardPage);