# Imagenes
1. https://images10.newegg.com/BizIntell/item/11/553/11-553-048/3.jpg
2. https://www.zotac.com/download/files/styles/org/public/news/images/2018rtxgraphicscards_reviews_1280x500.jpg?itok=YwglnHBz
3. https://www.zotac.com/download/files/styles/org/public/news/images/1_110.jpg?itok=-IBEBvZO


**Cartas para slider**
`
    <div class="card">
        <img src="assets/img/pc.png" class="img-fluid" style="width: 18rem;" alt="">
        <div class="card-body">
            <p class="card-text">Computadoras</p>
            <div class="row">
                <div class="col-sm-7">
                    <a href="#" class="btn"><i class="fas fa-cart-plus mr-2"></i> Agegar</a>
                </div>
                <div class="col-sm-5 col-xs-12">
                    <p id="price"><strong>$25,500</strong></p>
                </div>
            </div>
        </div>
    </div>
`

**Carousel**
`
    <div class="col-lg-12 col-sm-12">
        <div class="slick-carousel d-flex justify-content-center">
            <button class="btn prev"><i class="fas fa-chevron-left"></i></button>
            <div class="slick-item position-relative">
                <img src="https://images10.newegg.com/BizIntell/item/11/553/11-553-048/3.jpg" class="img-fluid"
                    alt="">
                <div class="jumbo position-absolute w-100 h-100 ">
                    <p class="tittle">Tenemos el equipo perfecto para ti</p>
                    <p>Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.
                        Cake muffin donut.</p>
                    <button class="btn primary-btn">Catalogo</button>
                </div>
            </div>
            <div class="slick-item position-relative">
                <img src="https://www.travisnet.es/wp-content/uploads/2018/01/teclado-1280x500.jpg"
                    class="img-fluid" alt="">
                <div class="jumbo position-absolute w-100 h-100 ">
                    <p class="tittle">Los mejores teclados del mercado</p>
                    <p>Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.
                        Cake muffin donut.</p>
                    <button class="btn primary-btn">Catalogo</button>
                </div>
            </div>
            <div class="slick-item">
                <img src="https://es.aorus.com/upload/Admin/images/01-Event-Page-banner-1280x480-NVHDC.jpg"
                    class="img-fluid" alt="">
            </div>
            <div class="slick-item position-relative">
                <img src="https://miro.medium.com/max/2560/1*G72JxbG6sR4N4vg09VCIig.jpeg" class="img-fluid"
                    alt="">
                <div class="jumbo position-absolute w-100 h-100 ">
                    <p class="tittle">Las mejores ofertas en telcados</p>
                    <p>Cupcake ipsum dolor sit amet. Tiramisu chocolate cake jelly oat cake icing marshmallow.
                        Cake muffin donut.</p>
                    <button class="btn primary-btn">Catalogo</button>
                </div>
            </div>
            <button class="btn next"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>

`

# **User table**
`
    <table class="table caption-top table bg-darkness font-secondary table-lg m-5 p-5">
                    <caption class="fs-1 text-center m-3 fw-bold">Carrito de compras <i class="fas fa-shopping-cart"></i>
                    </caption>
                    <thead class="fs-2 text-center font-secondary text-primary">
                        <tr>
                            <th scope="col" hidden>#</th>
                            <th scope="col">Articulo</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" hidden>1</th>
                            <td class="text-center"><span><img src="assets/img/red chair.png" width="80" alt=""> Silla
                                    Gamer</span></td>
                            <td class="text-center">$3,000</td>
                            <td class="w-25 text-center">
                                <span>
                                    <i class="fas fa-minus"></i>
                                    <input type="text" value="1" readonly>
                                    <i class="fas fa-plus"></i>
                                </span>
                            </td>
                            <th class="text-center"><i class="fas fa-trash"></i></th>
                        </tr>
                        <tr>
                            <th scope="row" hidden>2</th>
                            <td class="text-center"><span><img src="assets/img/pc.png" width="80" alt=""> Silla Gamer</span>
                            </td>
                            <td class="text-center">$25,600</td>
                            <td class="w-25 text-center">
                                <span>
                                    <i class="fas fa-minus"></i>
                                    <input type="text" value="1" readonly>
                                    <i class="fas fa-plus"></i>
                                </span>
                            </td>
                            <th class="text-center"><i class="fas fa-trash"></i></th>
                        </tr>
                        <tr>
                            <th scope="row" hidden>3</th>
                            <td class="text-center"><span><img src="assets/img/XZ4010.png" width="80" alt=""> Silla Gamer</span>
                            </td>
                            <td class="text-center">$3,000</td>
                            <td class="w-25 text-center">
                                <span>
                                    <i class="fas fa-minus"></i>
                                    <input type="text" value="1" readonly>
                                    <i class="fas fa-plus"></i>
                                </span>
                            </td>
                            <th class="text-center"><i class="fas fa-trash"></i></th>
                        </tr>
                    </tbody>
                </table>
`


#Mailgun password = 6PVxuXFCCsbPn27

#TODO
1. Agregar producto con sus imagenes, portada y categoria 
    (alemnos 10 por cada categoria)
2. Mostrar todos los productos en todas las paginas donde deba
    ##HOME PAGE
        --Sillas del primer carousel
3. Agregar productos a una lista de favoritos con un combobox
4. Agregar al carrito y que la informacion no se pierda (puede ser un json local)
5. el precio del carrito se debe mostrar en todas las navbar si el usuario
    esta en sesion
6. Mostrar a el usuaro en todas las pantallas
7. solucionar bugs del usuario