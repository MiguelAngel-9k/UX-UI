
$(document).ready(()=>{
    $("#addressForm").validate({
        rules: {
            streetAddress:{
                required: true
            },
            zipCode:{
                required: true,
                digits: true
            },
            state:{
                required: true
            },
            city:{
                required: true
            }
        },
        messages: {
            streetAddress:{
                required: "*"
            },
            zipCode: {
                required: "*",
                digits: "Solo numero validos."
            },
            state: {
                required: "*"
            },
            city: {
                required: "*"
            }
        }
    });
});