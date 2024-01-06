/*
< username 이메일 형식인지 확인하는 정규표현식 > 
https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
*/

function validateEmail(email) {
	var re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export { validateEmail };
