
//Cards
const cards = $('.wish-card');
let cardSets;
let position = 0;

function hideCards(){
    //get sets of two cards    
    cardSets = Math.round(cards.length / 2);
    //!(cards.length % 2) ?  cardSets = cardSets : cardSets += 1; 

    console.log("card sets "+cardSets);
    for(let card = 0; card < cards.length; card++)
        cards[card].style.display = 'none';    

    showCards(position);
}

function showCards(position){
    cards[position*2].style.display = 'flex';
    cards[(position*2)+1].style.display = 'flex'; 
}

//BUTTONS
const addressBtn = $('#addressBtn');
const userInfoBtn = $('#userInfoBtn');
const leftButton = $('#leftButton');
const rightButton = $('#rightButton');



//WORK SPACE
const address = $('#addressForm');
const woksSpaceHeader = $("#workspaceHeader");
const userInfo = $('#userInfo');
woksSpaceHeader.text('');
address.hide();
userInfo.hide();

//Address Button
addressBtn.click(() => {
    userInfo.hide();
    woksSpaceHeader.text('');
    address.show();
    woksSpaceHeader.text("Dirección.");
});

//Personal Info
userInfoBtn.click(()=>{
    address.hide();
    woksSpaceHeader.text('');
    userInfo.show();
    woksSpaceHeader.text('Información personal.');
});

hideCards();

rightButton.click(()=>{
    
    position+= 1;

    hideCards();
})

//1.- saber en que estado se encuentra el toggle para 
//    borrar o escrbir en el header