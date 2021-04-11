

$(document).ready(() => {

    $("#sign-in").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "!Ups¡, No olvides tu correo.",
                email: "Debe ser un email valido."
            },
            password: {
                required: "¿Olvidaste tu correo?."
            }
        }
    });

    $("#recent-user-form").validate({
        rules: {
            password: {
                required: true
            }
        },
        messages:{
            password: {
                required: "¿Olvidaste tu contraseña?."
            }
        }
    })

    $("#add-user-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "!Ups¡, No olvides tu correo.",
                email: "Debe ser un email valido."
            },
            password: {
                required: "¿Olvidaste tu correo?."
            }
        }
    });

    $("#personalInfo").validate({
        rules: {
            name:{
                required: true
            },
            middleName:{
                required: false
            },
            FlastName:{
                required: true
            },
            lastName:{
                required: true
            },
            phoneNumber:{
                required: true,
                digits: true,
                minlength: 8            
            },
            email: {
                email: true,
                requried: true
            },
            password: {
                minlength: 8,
                required: true
            }
        },
        messages: {
            name:{
                required: "*",
                number: "No puede llevar numeros."
            },
            middleName:{
                required: false,
                number: "No puede llevar numeros."
            },
            FlastName:{
                required: "*",
                number: "No puede llevar numeros."
            },
            lastName:{
                required: "*",
                number: "No puede llevar numeros."
            },
            phoneNumber:{
                required: "*",
                digits: "No puede llevar letras.",
                minlength: "Debe tener un minimo de 8 digitos."            
            },
            email: {
                email: "Debe ser un email valido.",
                requried: "*"
            },
            password: {
                number: "Necesitas un minimo de 2 numeros.",
                minlength: "Debe tener un minimo de 8 caracteres",
                required: "*"
            }
        }
    });

    $("#signInAddress").validate({
        rules: {
            streetAddress: {
                required: true
            },
            zipCode: {
                digits: true,
                required: true,
                minlength: 6            
            },
            state: {
                required: true
            },
            city: {
                required: true                
            }

        },
        messages: {
            streetAddress:{
                required: "*"
            },
            zipCode: {
                digits: "Deben ser solo numeros",
                required: "*",
                minlength: "Debe ser de almenos 6 digitos"
            },
            state:{
                required: "*"
            },
            city:{
                required: "*"
            }
        }
    });
   
}); 