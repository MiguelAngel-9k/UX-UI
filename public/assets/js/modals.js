

const addAcountModal = async () => {

    const { value: formValues } = await Swal.fire({
        title: 'Agrega tu correo y contrasenia',
        html:
            '<input name="loginEmail" type="email" id="loginEmail" class="swal2-input" placeholder = "tu-correo@dominio.com">' +
            '<input name="loginPassword" type="password" id="loginPassword" class="swal2-input" placeholder = "Contrasnia">',

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('loginEmail').value,
                document.getElementById('loginPassword').value,
            ]
        }
    })

    //enviar iformacion por ajax
    if (formValues)
        return formValues;
    else return 'No hay valores';

    /*  if (password) {
            Swal.fire(`Entered password: ${password}`)
         } 
    */
}

const signInModal = async () => {

    const { value: password } = await Swal.fire({
        title: 'Ingrese su contrasenia',
        imageUrl: 'assets/img/real-user.jpg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        input: 'password',
        inputPlaceholder: 'Contrasenia',
        showCancelButton: true,
        inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    })

    //enviar iformacion por ajax
    if (password)
        return password;
    else return 'No hay valores';

    /*  
     if (password) {
         Swal.fire(`Entered password: ${password}`)
     } 
     */
}

const loginModal = async () => {

    const { value: formValues } = await Swal.fire({
        title: 'Registrate',
        html:
            '<form name="signUp" id="signUp">' +
            '<input name="name" id="name" type="text" class="swal2-input" placeholder = "Nombre">' +
            '<input name="midlname" type="text" id="midlname" class="swal2-input" placeholder = "Apellido paterno">' +
            '<input name="fLastName" type="text" id="fLastName" class="swal2-input" placeholder = "Apellido paterno">' +
            '<input name="lastName" type="text" id="lastName" class="swal2-input" placeholder = "Apellido materno">' +
            '<input name="email" type="email" id="email" class="swal2-input" placeholder = "tu-correo@dominio.com">' +
            '<input name="pwd" type="password" id="pwd" class="swal2-input" placeholder = "Contrasnia">' +
            '</form>',

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('name').value,
                document.getElementById('midlname').value,
                document.getElementById('fLastName').value,
                document.getElementById('lastName').value,
                document.getElementById('email').value,
                document.getElementById('pwd').value
            ]
        }
    })

    if (formValues) {

        $('#signUp').validate({

            rules: {
                name: "required",
                fLastName: "required",
                lastName: "required",
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    password: true
                }
            }

        })

        if ($('#signUp').valid()){
            $.ajax({
                type: "POST",
                url: "localhost:3000/login",
                data: formValues,
                success: (res)=>{
                    console.log(res);
                },
                dataType: dataType
              });
        }//enviar inforamcion pora ajax
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Revisa que no hayas olvidado algo, intenta de nuevo',
                footer: '<a href>Por que tengo este problema?</a>'
            })
        }




        /* Swal.fire(JSON.stringify(formValues))
        console.log(formValues); */
    }
}

const sendInfo = ()=>{
    $.ajax({
        type: "POST",
        url: "localhost:3000/login",
        data: {
            email : 'MiCorreo@correo.com',
            password: "miPass"
        },
        success: (res)=>{
            if(res) console.log(res)
            else console.log('no se regreso nada')
        }
      });
}

$('#send').click(()=>{
    sendInfo();
})