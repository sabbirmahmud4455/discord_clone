import React, { useState } from 'react'
import {Box, Tooltip, Typography} from '@mui/material'
import Avatar from '../../../../shared/components/Avatar'
import InvitationDecisionButton from './InvitationDecisionButton';
import { connect } from "react-redux";
import { getActions } from '../../../../store/actions/friendsActions'

const PendingInvitationsListItems = ({
	id,
	userName,
	userMail,
	acceptFriendInvitation,
	rejectFriendInvitation,
}) => {

	const [buttonsDisabled, setButtonsDisabled] = useState(false);

	const handleAcceptInvitation = () => {
		acceptFriendInvitation({id});
		setButtonsDisabled(true);
	};

	const handleRejectInvitation = () => {
		rejectFriendInvitation({id});
		setButtonsDisabled(true);
	};

  return (
	<Tooltip title={userMail}>
		<div style={{width: '100%'}}>
			<Box
				sx={{
					width: '100%',
					height: '42px',
					marginTop: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',

				}}
			>
				<Avatar userName={userName} />
				<Typography 
					sx={{
						marginLeft: '7px',
						fontWeight: 700,
						color: '#8e9297',
						flexGrow: 1
					}}
					variant="subtitle1"
				>
					{userName}
				</Typography>
				<InvitationDecisionButton
					disabled={buttonsDisabled}
					acceptInvitationHandler = {handleAcceptInvitation}
					rejectInvitationHandler = {handleRejectInvitation}
				/>
			</Box>
		</div>
	</Tooltip>
  )
}

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch)
	}
}

export default connect(null, mapActionsToProps) (PendingInvitationsListItems)