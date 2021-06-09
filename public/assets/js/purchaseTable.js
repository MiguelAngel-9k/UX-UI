const formTitle = $('#formTitle');
const personalInfo = $('#personalInfo');
const personalInfoForm = $('#personal-info-form');

const adressInfoForm = $('#adress-info-form');
const adressInfo = $('#adressInfo');

const compras = $('#compras');
const tablaCompras = $('#compras-tabla');

const rows = $('tbody>tr');

const saveUserInfo = $('#saveUserInfo');
const saveUserAdress = $('#saveUserAdress');

const getUserInfo = ()=>{
    const user = {
        name: $('#updateName').val().toLowerCase(),
        s_name: $('#updateMiddlename').val().toLowerCase(),
        lastName_p: $('#updateLastName-p').val().toLowerCase(),
        lastName_m: $('#updateLastName-m').val().toLowerCase(),
        password: $('#updatePassword').val().toLowerCase(),
        email: $('#email').val().toLowerCase(),
        number: $('#number').val().toLowerCase(),
        street: $('#street').val().toLowerCase(),
        city: $('#city').val().toLowerCase(),
        state: $('#state').val().toLowerCase()
    }

    return user;
}

const validUserForm = () => {
    personalInfoForm.validate({
        rules: {
            name: "required",
            lastName_p: "required",
            lastName_m: "required",
        }
    })

    if (personalInfoForm.valid())
        return true;

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece ser que falta algo, asegurate de tener tu nombre y almenos los dos apellidos'
    })
    return false;
}

const validAdressForm = () => {

    adressInfoForm.validate({
        rules: {
            number: {
                number: true,
                required: true
            },
            street: "required",
            city: "required",
            state: "required"
        }
    })

    if (adressInfoForm.valid())
        return true
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece ser que falta algo, asegurate de registrar toda tu dirección'
        })
        return false;
    }

}

rows.animate({
    opacity: '0'
})

const updateAdress = ()=>{
    const data = getUserInfo();

    //if(!validUserForm()) return;

    $.ajax({

        url: `/user/update-adress`,
        type: 'POST',
        accept: "application/json",
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        success: function(data) {
            if (data) {
                console.log(data);
                Swal.fire({ //debe ser async
                    icon: 'success',
                    title: 'Todo bien, todo correcto',
                    text: 'Se actualizo correctamente'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parece ser que este correo ya esta asociado a una cuenta',
                    footer: '<a href>Restaurar contraseña</a>'
                })
            }
        }

    })
}

const updateUser = () => {

    const data = getUserInfo();

    //if(!validUserForm()) return;

    $.ajax({

        url: `/user/update-info`,
        type: 'POST',
        accept: "application/json",
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        success: function(data) {
            if (data) {
                console.log(data);
                Swal.fire({ //debe ser async
                    icon: 'success',
                    title: 'Todo bien, todo correcto',
                    text: 'Se actualizo correctamente'
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Parece ser que este correo ya esta asociado a una cuenta',
                    footer: '<a href>Restaurar contraseña</a>'
                })
            }
        }

    })

}


$(document).ready(() => {

    console.log(getUserInfo());

    personalInfo.click(() => {
        personalInfoForm.fadeIn(1500);

        formTitle.text("Infomración personal");

        adressInfoForm.hide();

    })

    adressInfo.click(() => {
        adressInfoForm.fadeIn(1500);

        formTitle.text("Dirección de envio");

        personalInfoForm.hide();

    })

    compras.click(() => {

        //PURCHASE TABLE ANIM
        tablaCompras.fadeIn(1500);

        setTimeout(() => {
            rows.animate({
                opacity: '1'
            })
        }, 1500);
    })

    saveUserInfo.on('click', (e) => {
        e.preventDefault();
        updateUser();
    })

    saveUserAdress.on('click', (e)=>{
        e.preventDefault();
        updateAdress();
    })

})