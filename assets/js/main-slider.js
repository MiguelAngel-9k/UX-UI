function Banner(_tittle, _desc, _smDesc, _img, _action) {
    this.tittle = _tittle;
    this.desc = _desc;
    this.smDesc = _smDesc;
    this.img = _img;
    this.action = _action;

    this.getBanner = () => {
        return `Title: ${this.tittle} \n Description: ${this.desc} \n Small Description: ${this.smDesc} \n Image: ${this.img} \n Action: ${this.action}`;
    }

    this.getTittle = () => {
        return this.tittle;
    }

    this.getDescription = () => {
        return this.desc;
    }

    this.getSmallDesc = () => {
        return this.smDesc;
    }

    this.getImg = () => {
        return this.img;
    }
}

function displayBanner(_element, _banners, _pos) {
    _element[0].innerHTML = _banners[_pos].tittle;
    _element[1].innerHTML = _banners[_pos].desc;
    _element[2].innerHTML = _banners[_pos].smDesc;
    _element[4].style.backgroundImage = _banners[_pos].img;
}

const banner_1 = [
    document.getElementById('bannerTitle'),
    document.getElementById('bannerDesc'),
    document.getElementById('bannerSmDesc'),
    document.getElementById('bannerBtn'),
    document.getElementById('bannerContainer'),
];

const left = document.getElementById('leftBanner');
const right = document.getElementById('rightBanner');
var pos = 0;
//banner_1.style.backgroundImage = 'none';


const banners = [
    new Banner(
        "Nuestras Soluciones",
        "Computadoras preensambladas echas para tus necesidades. Como workstations, Videojuegos, Renderizado 3D, edicion y disenio.",
        "Todo lo que necesitas en una sola computadora ",
        "url('/assets/img/setupx4033px.webp')",
        'none'
    ),
    new Banner(
        "Nuestra Tienda",
        "Danish bear claw jelly-o dessert macaroon candy canes oat cake dragée tiramisu. Pie ice cream sweet. Caramels tart candy canes liquorice dessert marzipan cheesecake tart chocolate..",
        "Puedes hacer tu pedido y recoger en tienda.",
        "url('/assets/img/nzxt.jpg')",
        'none'
    ),
];

left.addEventListener("click", () => {
    pos -= 1;
    if (pos < 0) 
        pos = 1;
    
    displayBanner(banner_1, banners, pos);
});

right.addEventListener("click", ()=>{
    pos += 1;
    if(pos > 1)        
        pos = 0;

    displayBanner(banner_1, banners, pos);
});

setInterval(()=>{
    if(pos == 0){
        displayBanner(banner_1, banners, 0);
        pos += 1;
    }
    else if(pos == 1){
        displayBanner(banner_1, banners, 1);
        pos = 0;        
    }
},5000);
