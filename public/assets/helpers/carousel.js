

class Carousel {

    constructor(rawItems = {}) {


        this.items = [];

        Object.keys(rawItems).forEach(key => this.items.push(rawItems[key]));

        this.final = this.items.length - 3;

        this.pos = 0;

        this.hideItems();
        this.showItems();

    }

    hideItems() {

        this.items.forEach((item, i) => {
            if (i < this.final + 1)
                item.style.display = 'none';
        });

    }

    showItems( side = true) {

        if (side && this.pos < this.final) {
            this.pos += 1;
        } else if (side && this.pos >= this.final)
            this.pos = 0;
        else if (side === false && this.pos > 0)
            this.pos -= 1;
        else if (side === false && this.pos === 0)
            this.pos = this.final;


        this.items[this.pos].style.display = 'flex';

    }

}