const loginModal = async () => {

    const { value: formValues } = await Swal.fire({
        title: 'Registrate',
        html: '<form name="signUp" id="signUp" enctype="multipart/form-data">' +
            '<input name="name" id="name" type="text" class="swal2-input" placeholder = "Nombre">' +
            '<input name="midlname" type="text" id="midlname" class="swal2-input" placeholder = "Apellido paterno">' +
            '<input name="fLastName" type="text" id="fLastName" class="swal2-input" placeholder = "Apellido paterno">' +
            '<input name="lastName" type="text" id="lastName" class="swal2-input" placeholder = "Apellido materno">' +
            '<input name="email" type="email" id="email" class="swal2-input" placeholder = "tu-correo@dominio.com">' +
            '<input name="pwd" type="password" id="pwd" class="swal2-input" placeholder = "Contrasnia">' +
            '<input name="image" id="avatar" type="file" class="swal2-input" placeholder = "Avatar"/>' +
            '</form>',

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('name').value,
                document.getElementById('midlname').value,
                document.getElementById('fLastName').value,
                document.getElementById('lastName').value,
                document.getElementById('email').value,
                document.getElementById('pwd').value,
                document.getElementById('avatar').value
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

        if ($('#signUp').valid()) {

            $.ajax({

                url: `/user/register`,
                type: 'POST',
                accept: "multipart/from-data",
                contentType: false,
                data: formValues,
                cache: false
                success: function(data) {
                    if (data) {

                        alert(data);
                        //window.location.replace('/login/'+data.email);
                    }
                },
                error: function() {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Parece ser que algo fallo al enviar la información',
                        footer: '<a href>Por que tengo este problema?</a>'
                    })
                }

            })
        } //enviar inforamcion pora ajax
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