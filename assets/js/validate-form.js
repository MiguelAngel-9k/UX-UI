
const userInfo = $('#userInfo');
const userAddress = $("#userAddress");

$(document).ready(()=>{

    userInfo.validate({rules, messages} = userConfig);
    userAddress.validate({rules, messages} = userAddressConfig);

});