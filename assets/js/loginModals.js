//Recent user modal

const recentUserModal = $('#recentUserModal');
const login = $('#login');

login.click(()=>{
	recentUserModal.modal({
		fadeDuration: 100,
		fadeDelay: 0.5
	});
});


//Add user modal
const addUserModal = $('#addUserModal');
const addUser = $('#addUser');

addUser.click(()=>{
	addUserModal.modal({
		fadeDuration: 100,
		fadeDelay: 0.5
	});
});

//Sign in
const signInModal = $('#signInModal');
const singIn = $('#signIn');

singIn.click(()=>{
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

next.click(()=>{
	personalInfo.hide();
	signIngAddres.fadeIn(_fade);
})

back.click(()=>{
	personalInfo.fadeIn(_fade);
	signIngAddres.hide();
})