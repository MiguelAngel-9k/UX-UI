userConfig = {
    rules:{
        name: {
            required: true,
            digits: false            
        },
        middleName: {
            required: false,
            digits: false
        },
        FlastName:{
            required: true,
            digits: false
        },
        lastName: {
            required: true,
            digits: false
        },
        phoneNumber: {
            required: true,
            digits: true,
            minlength: 8,
            maxlength: 12
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
}

const userAddressConfig = {
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
        },
        suburb: {
            required : true
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
        },
        suburb:{
            required: "*"
        }
    }
}

module.exports = {
    userAddressConfig,
    userConfig
};