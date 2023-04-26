// RENDERIZAR PRODUCTOS
let products = [
    { name: "Burguer", price: 13000, img: "./img/img-productos/hamburguesa_doble_carne_1024x1024.webp" },
    { name: "Hot dogs", price: 15000, img: "./img/img-productos/perros-calientes-11162.png" },
    { name: "Salchipapa 1", price: 18000, img: "./img/img-productos/emplatado-final-de-las-salchipapas.jpg" },
    { name: "Salchipapa 2", price: 10000, img: "./img/img-productos/emplatado-final-de-las-salchipapas.jpg" },
    { name:"Papas locas", price: 16500, img: "./img/img-productos/papas-locas-2.jpg_842323379.webp"},
    { name: "Pizza", price: 7500, img: "./img/img-productos/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"},
    { name: "Empanadas", price: 1800, img: "./img/img-productos/empanadas.jpg"},
    { name: "Lumpias", price: 2000, img: "./img/img-productos/RFB-11-6-lumpias.jpg"},
];

    const sectionCards = document.querySelector('#products-card-container');
    sectionCards.innerHTML = '';
    products.map(item => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mx-2 my-3 bg-secondary')
        card.setAttribute('style', 'width: 18rem;')

        card.innerHTML = `
            <img class="card-img-top mt-2" src="${item.img}" alt="" style="height: 13rem;">
            <div class="card-body text-light text-center">
                <h2 id="name-product">${item.name}</h2>
                <h5>$<span id="price-product">${item.price}</span></h5>
                <div class="row justify-content-center">
                    <button class="btn btn-warning col-5" id="btn-añadir">Añadir</button>
                </div>
            </div>
        `;
        sectionCards.appendChild(card);

    });

