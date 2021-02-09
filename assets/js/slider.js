
const card = document.getElementsByClassName("card");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

const listLimit = 4;

var position = 1;

function sliderItems(_items, _position) {

    const first = listLimit * (_position - 1);
    const last = listLimit * _position;

    for (let i = first; i < last; i++) {
        _items[i].style.display = 'inline';
    }

    console.log("slider function")
}

function hideItems(_collection) {
    for (let i = 0; _collection.length > i; i++) {
        _collection[i].style.display = 'none';
    }
}

//let item = card[0].style.display = 'none';
//console.log(item.style.display);
console.log("Antes del hide ", card);
hideItems(card);
console.log("Despues del hide ", card);
sliderItems(card, position);

rightBtn.addEventListener("click", () => {
    hideItems(card);
    position += 1;
    position >= Math.round(card.length / listLimit) + 1 ? position = Math.round(card.length / listLimit): position = position;
    sliderItems(card, position);
});

leftBtn.addEventListener("click", () => {
    hideItems(card);
    position -= 1;
    position <= 0 ? position = 1 : position = position;
    sliderItems(card, position);
})




