//Get dom elements
const dropBtn = $('#dropButton');
const dropList = $('#computersList');

dropBtn.hover(()=>{
    dropList.show();    
},
()=>{
    dropList.hide();
}
)