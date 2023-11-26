// create carousel class
class Carousel {
    constructor(items) {
        this.items = items;
        this.index = 0;
        this.timer = null;
    }

    // show carousel items
    showItems() {
        clearTimeout(this.timer);
        const currentItem = this.items[this.index];
        const nextItem = this.items[(this.index + 1) % this.items.length];

        console.log('Current Item:', currentItem);
        console.log('Next Item:', nextItem);

        this.timer = setTimeout(() => {
            this.index = (this.index + 1) % this.items.length;
            this.showItems();
        }, 2000);
    }
}

// create instance of carousel
const items = document.querySelectorAll(".service-slide");
const carousel = new Carousel(items);

// start the carousel
carousel.showItems();