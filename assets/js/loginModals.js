const addUserModal = $('#loginModal');
const addUser = $('#login');

addUser.click(()=>{
	addUserModal.modal({
		fadeDuration: 100,
		fadeDelay: 0.5
	});
});
