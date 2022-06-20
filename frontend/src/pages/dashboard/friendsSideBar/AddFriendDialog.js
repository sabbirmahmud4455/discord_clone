import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InputWithLabel from '../../../shared/components/InputWithLabel';
import { validateMail } from '../../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/friendsActions';
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton"


const AddFriendDialog = ({
	isDialogOpen,
	closeDialogHandler,
	sendFriendInvitation = () => {}
}) => {

	const [mail, setMail] = useState();
	const [isFormValid, setIsFormValid] = useState();

	const handleSendInvitation = () => {
		sendFriendInvitation({
			mail: mail,
		})
	}

	const handleCloseDialog = () => {
		closeDialogHandler();
		setMail('');
	}

	useEffect(() => {
		setIsFormValid(validateMail(mail))

	}, [mail, setIsFormValid])

  return (
	<>
		<Dialog open={isDialogOpen} onClose={handleCloseDialog}>
			<DialogTitle>
				<Typography>Invite a Friend</Typography>
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<Typography>Enter e-mail address of friend which you would like to invite</Typography>

					<InputWithLabel 
						label="Mail"
						type="mail"
						value={mail}
						setValue={setMail}
						placeholder="Enter mail address"
					/>

				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<CustomPrimaryButton
					onClick = {handleSendInvitation}
					disabled = {!isFormValid}
					label= "Send"
					addiTionalStyle = {{
						marginLeft: '15px',
						marginRight: '15px',
						marginBottom: '10px'
					}}
				/>
			</DialogActions>
		</Dialog>
	</>
  )
}

const mapActionToProps = (dispatch) => {
	return {
		...getActions(dispatch),
	}
}

export default connect(null, mapActionToProps)(AddFriendDialog)