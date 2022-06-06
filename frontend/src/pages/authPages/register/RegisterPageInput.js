import React from 'react'
import InputWithLabel from '../../../shared/components/InputWithLabel'

const RegisterPageInput = (props) => {
	const {mail, setMail, userName, setUserName, password, setPassword} = props

  return (
	<>

		<InputWithLabel 
		value={userName}
		setValue={setUserName}
		label="User Name"
		type="text"
		placeholder="Enter your name"
		/>

		<InputWithLabel 
		value={mail}
		setValue={setMail}
		label="E-mail"
		type="email"
		placeholder="Enter your e-mail address"
		/>

		<InputWithLabel 
		value={password}
		setValue={setPassword}
		label="Password"
		type="password"
		placeholder="Enter your password"
		/>

	</>
  )
}

export default RegisterPageInput