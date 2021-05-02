

class Jumbo {

    constructor(_img = '', _title = '', _desc = '', _url = '', _color = {}) {

        this.img = _img;
        this.title = _title;
        this.desc = _desc;
        this.url = _url;
        this.color = _color;

        //this.jumbo = _jumbo;
       /*  this.titleElement = this.jumbo.children().find("#title");
        this.descElement = this.jumbo.children().find("#description");

        this.jumbo.css("background-image", `url(${_img})`);
        this.titleElement.text(_title);
        this.descElement.text(_desc); */

        //this.jumbo.hide();
    }

    showUp(_jumbo){
        
        _jumbo.css("background-image", `url(${this.img})`);
        _jumbo.children().find('#title').text(this.title);
        _jumbo.children().find('#description').text(this.desc);


        _jumbo.children().find('#title').css('color','dark');

    }

}

/* let slider = [
    new Jumbo('https://images10.newegg.com/BizIntell/item/11/553/11-553-048/3.jpg', 'Tenemos el equipo perfecto para ti',`Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.
    Cake muffin donut.`),
    new Jumbo('https://www.travisnet.es/wp-content/uploads/2018/01/teclado-1280x500.jpg', 'Los teclados que necesitas',`Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.
    Cake muffin donut.`)
]  */

const jumbo = $('#jumbo');

const slider = [
    new Jumbo('https://images10.newegg.com/BizIntell/item/11/553/11-553-048/3.jpg', 'Tenemos la estacion de trabajo para ti', `Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.
    Cake muffin donut.`, '', ''),

    new Jumbo('https://www.travisnet.es/wp-content/uploads/2018/01/teclado-1280x500.jpg', 'Lo mejor en teclados del mercado', `Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.Cake muffin donut.`, '', 'dark'),

    new Jumbo('https://es.aorus.com/upload/Admin/images/01-Event-Page-banner-1280x480-NVHDC.jpg', 'Tenemos la estacion de trabajo para ti', `Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.Cake muffin donut.`, '', ''),

    new Jumbo('https://miro.medium.com/max/2560/1*G72JxbG6sR4N4vg09VCIig.jpeg', 'Tenemos la estacion de trabajo para ti', `Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.Cake muffin donut.`, '', '')
]

console.log(slider);



/* const imgs = [
    'https://images10.newegg.com/BizIntell/item/11/553/11-553-048/3.jpg',
    'https://www.travisnet.es/wp-content/uploads/2018/01/teclado-1280x500.jpg',
    'https://es.aorus.com/upload/Admin/images/01-Event-Page-banner-1280x480-NVHDC.jpg',
    'https://miro.medium.com/max/2560/1*G72JxbG6sR4N4vg09VCIig.jpeg'
]
*/

let pos = 0

slider[0].showUp(jumbo);

setInterval(()=>{

    //slider[pos].jumbo.hide();

    if(pos <= slider.length-1){
        slider[pos].showUp(jumbo);
        pos += 1;
    }else {
        pos = 0;
        slider[pos].jumbo.show(jumbo);
    }

},3000);