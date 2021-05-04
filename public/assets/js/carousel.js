

const rawItems = $('.slick-item');
const prev = $('.prev');
const next = $('.next');

const carousel = new Carousel( rawItems );

prev.click(() => {

    carousel.hideItems();
    carousel.showItems(false);

});

next.click(() => {
    carousel.hideItems();
    carousel.showItems(true);

})

/* setInterval(()=>{
    carousel.hideItems();
    carousel.showItems(true);
}, 6000) */