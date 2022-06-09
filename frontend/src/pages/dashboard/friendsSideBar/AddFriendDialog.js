import { Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InputWithLabel from '../../../shared/components/InputWithLabel';
import { validateMail } from '../../../shared/utils/validators';


const AddFriendDialog = ({
	isDialogOpen,
	closeDialogHandler,
	sendFriendsInvitation = () => {}
}) => {

	const [mail, setMail] = useState();
	const [isFormValid, setIsFormValid] = useState();

	const handleEendInvitation = () => {
		// send friend request to server
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
		</Dialog>
	</>
  )
}

export default AddFriendDialog