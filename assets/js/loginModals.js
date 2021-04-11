//User information
const user = {
	name: "",
	middleName: "",
	FlastName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	password: "",
	zipCode: "",
	streetAddress: "",
	city: "",
	state: "",
	setUser(_name, _middleName, _FlastName, _lastName, _phoneNumber, _email, _password,
				_zipCode, _streetAddress, _city, _state) {
		this.name = _name;
		this.middleName = _middleName;
		this.FlastName = _FlastName;
		this.lastName = _lastName;
		this.phoneNumber = _phoneNumber;
		this.email = _email;
		this.password = _password;
		this.zipCode = _zipCode;
		this.streetAddress = _streetAddress;
		this.state = _state;
		this.city = _city;
	}
}

//Recent user modal

const recentUserModal = $('#recentUserModal');
const login = $('#login');
const signUp = $('#signUp');

login.click(() => {
	recentUserModal.modal({
		fadeDuration: 100,
		fadeDelay: 0.5
	});
});


//Add user modal
const addUserModal = $('#addUserModal');
const addUser = $('#addUser');

addUser.click(() => {
	addUserModal.modal({
		fadeDuration: 100,
		fadeDelay: 0.5
	});
});

//Sign in
const signInModal = $('#signInModal');
const singIn = $('#signIn');

singIn.click(() => {
	signInModal.modal({
		fadeDuration: 100,
		fadeDelay: 0.5
	});
});

//address sign in animation
const _fade = 2000;

const next = $('#next');
const back = $('#back');
const signIngAddres = $('#signInAddress');
const personalInfo = $('#personalInfo');

next.click(() => {

	personalInfo.hide();
	signIngAddres.fadeIn(_fade);
})

back.click(() => {

	personalInfo.fadeIn(_fade);
	signIngAddres.hide();
})

signUp.click(() => {

	user.setUser(
		personalInfo.find('#name').val(),
		personalInfo.find('#middleName').val(),
		personalInfo.find('#FlastName').val(),
		personalInfo.find('#lastName').val(),
		personalInfo.find('#phoneNumber').val(),
		personalInfo.find('#email').val(),
		personalInfo.find('#password').val(),
		signIngAddres.find('#zipCode').val(),
		signIngAddres.find('#streetAddress').val(),
		signIngAddres.find('#state').filter(':selected').val(),
		signIngAddres.find('#city').val()
	)

	//sendUser();

})

//preparacion para enviar al usuario mediante ajax
/* const sendUser = () => {
	$.ajax({
		data: user,
		url: /Mi proximo api/,
		type: 'POST',
		success: (response) => {
			console.log(response);
		}		
	})
} */

//el objeto de usuario se mandara al backend mediante ajax