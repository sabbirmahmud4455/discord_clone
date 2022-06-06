export const validateLoginForm = (mail, password) => {
	const isMailValid = validateMail(mail)
	const isPasswordValid = validatePassword(password);

	return isMailValid && isPasswordValid
}

export const validateRegisterForm = (userName ,mail, password) => {
	const isUserNameValid = validateUserName(userName)
	const isMailValid = validateMail(mail)
	const isPasswordValid = validatePassword(password);

	return isUserNameValid && isMailValid && isPasswordValid
}

const validateUserName = (userName) => {
	return userName && userName.length > 2 && userName.length <= 20;
}

const validateMail = (mail) => {
	const emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return emailPattern.test(mail)
}

const validatePassword = (password) => {
	return password && password.length > 6 && password.length < 12;
}