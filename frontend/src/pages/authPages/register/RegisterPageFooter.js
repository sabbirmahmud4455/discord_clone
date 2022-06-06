import React from 'react'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../../shared/components/RedirectInfo'
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';


const getFormNotValidMessage = ()=>{
	return "Username should contains between 3 and 20 characters and password should between 6 and 12 character also correct e-mail address should provided"
}

const getFormValidMessage = ()=>{
	return "Press to register"
}

const RegisterPageFooter = ({handleRegister, isFormValid}) => {
	const navigate = useNavigate();

	const handlerPushToRegisterPage = ()=>{
		return navigate('/login');
	};

	return (
		<>
			<Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage() }>
				<div>
					<CustomPrimaryButton
					label="Register Now"
					additionalStyles={{marginTop: '30px'}}
					disabled={!isFormValid}
					onClick={handleRegister}
					/>
				</div>
			</Tooltip>
			
			<RedirectInfo 
			text="Already have an account?"
			redirectText="Login"
			additionalStyles={{marginTop: '8px'}}
			redirectHandler={handlerPushToRegisterPage}
			/>
		</>
  	)
}

export default RegisterPageFooter