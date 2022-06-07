import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react"
import AuthBox from "../../../shared/components/AuthBox";
import { validateRegisterForm } from "../../../shared/utils/validators";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInput from "./RegisterPageInput";
import { connect } from 'react-redux'
import { getActions } from "../../../store/actions/authActions";
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ register }) => {
	const navigate = useNavigate();
	const [mail, setMail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(()=> {
		setIsFormValid(validateRegisterForm( userName, mail, password))
	}, [userName, mail, password, setIsFormValid])

	const handleRegister = () => {
		const userDetails = {
			username: userName,
			mail,
			password
		}
		register(userDetails, navigate)
	}
	
	return (
		<>
			<AuthBox>
				<Typography variant="h5" sx={{color: 'white'}}>
					Create an account
				</Typography>

				<RegisterPageInput 
				mail={mail}
				setMail={setMail}
				userName={userName}
				setUserName={setUserName}
				password={password}
				setPassword= {setPassword}
				
				/>

				<RegisterPageFooter isFormValid={isFormValid} handleRegister={handleRegister} />
			</AuthBox>
		</>

)
}

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch)
	}
}

export default connect(null, mapActionsToProps)(RegisterPage);
