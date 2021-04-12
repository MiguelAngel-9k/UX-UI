
const slider = {
    items: "",      //Array with elements of slider
    sets: 0,        //number of sets avalible
    position: 0,    //set position
    max: 2,         //max of elements in slider

    //Hide slider elemnts
    hideItems(){
        console.log('Number of sets: ' + this.sets);
        
        //Hide slider items
        for(let i = 0; i < this.items.length; i++)
        this.items[i].style.display = 'none';
        
        this.showItems();
    },
    
    //Show slider elemnts
    showItems(){
        //Look the position of set and print the next and prev item of current set
        this.items[this.position*this.max].style.display = 'flex';
        this.items[(this.position*this.max)+1].style.display = 'flex';
    },

    //Slider constructor 
    build(_items){//, _left, _right){

        this.items = _items;
        //this.left = _left;
        //this.right = _right;

        this.sets = Math.round(this.items.length/2);
        this.hideItems();
    },

    move(_direccion){

        if(_direccion) //go right
            this.position + 1 >= this.sets ? this.position = this.position : this.position += 1, this.hideItems(); 
        else //fo left
            this.position + 1 <= 1 ? this.position = this.position : this.position -=1, this.hideItems();        
    }
}

//direccion
const RIGHT = true;
const LEFT = false;

//Cards
slider.build( $('.wish-card') );

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

//slider buttons
rightButton.click(()=> slider.move(RIGHT));
leftButton.click(()=> slider.move(LEFT));
