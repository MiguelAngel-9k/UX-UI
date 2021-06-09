/*

	1.- Modal para dar la Bienvenida con sweet alert

*/

const userName = $('#user');
const onboard = $('#onboard').val();
const email = $('#email').val();

//Modal buttons
const modalButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
});

const onboardCompleted = ()=>{

	$.post('/user/onboard', {
		onboard : 1,
		email
	},
	function (data, status){
		console.log('onboard succed');
	})
}

const welcome = () => {

    modalButtons.fire({
        icon: 'info',
        title: 'Bienvenido a Altatec' + userName.text(),
        text: 'Te daremos un recorrido por tu perfil, ¿Estás listo?',
        confirmButtonText: 'Comenzar'
    }).then(res => {
        if (res.isConfirmed) {
            introJs().start();
            onboardCompleted();
        }
    })

}

$('document').ready(() => {

    //introJs().start();
    //welcome();
    //getOnboard();
    if(onboard == 0){
    	welcome();    	
    }
})