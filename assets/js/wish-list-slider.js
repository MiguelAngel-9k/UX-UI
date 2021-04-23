
const listItems = $("[w-item]");
let sets = Math.round(listItems.length / 2);
let position = 0;
const setOf = 2

//direccionals
const right = $("#right");
const left = $("#left");

console.log('pos' + position, 'set' +( sets-1));


const hideItems = ()=>{

    const listLength = listItems.length;
    for(let i = 0; i < listLength; i++)
        listItems[i].style.display = 'none';
    
    showItems();
}

const showItems = ()=>{

    listItems[position*setOf].style.display = 'block';
    listItems[(position*setOf)+1].style.display = 'block';
};

hideItems();

right.click(()=>{

    position >= sets-1 ? position = position : position += 1, hideItems();
    console.log('pos' + position, 'set' + (sets-1));
})

left.click(()=>{
    position == 0 ? position = position : position -= 1, hideItems();
})