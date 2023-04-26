
function addCart(newProduct) {

    for (let item = 0; item < carrito.length; item++) {
        if (carrito[item].product.trim() === newProduct.product.trim()) {

            // Actualizamos precio del producto
            let updatedPrice = parseInt(carrito[item].price) + parseInt(newProduct.price);
            carrito[item].price = updatedPrice;

            // actualizamos la cantidad del producto
            carrito[item].cantity++;
            /* si la condicion se cumple,
            entonces no agregamos el producto a la lista carrito, 
            si no que aumentamos la cantidad de ese producto.*/
            return null;
        }
    }

    // GUARDAR EN LA LISTA DE CARRITO COMPRAS
    carrito.push(newProduct);
    renderCarrito();
}


function renderCarrito() {
    contenedor.innerHTML = '';
    carrito.map(x => {
        const element = document.createElement('div');
        element.setAttribute('class', 'producto-carrito row justify-content-start bg-dark rounded p-2 my-3');

        element.innerHTML = `
            <div class="d-flex justify-content-between  text-light col-12">
                <h3 class="fw-bold" id="nameItem">${x.product}</h3>
                <h4>$ <span>${x.price}</span></h4>
                <h3 class="fw-bold" id="cantityItem">${x.cantity}</h3>
                <button class="btn btn-danger" id="borrar">X</button>
            </div>
        `;

        contenedor.appendChild(element);
        element.querySelector('#borrar').addEventListener('click', eliminarElementoCarrito);
    });
    document.querySelector('#contProductos').innerHTML = carrito.length;
    totalPagar();
}

// BORRAR ELEMENTO DEL CARRITO
function eliminarElementoCarrito(e) {
    const btn = e.target;
    console.log(btn)
    const contenedor = btn.closest('.producto-carrito');
    const nameItem = contenedor.querySelector('#nameItem').textContent;
    const cantity = contenedor.querySelector('#cantityItem').textContent;

    const NumCantity = parseInt(cantity)

    for (let i = 0; i < carrito.length; i++) {
       if (carrito[i].product.trim() === nameItem.trim()) {
            let precioUni = (carrito[i].price / carrito[i].cantity)
            if (NumCantity >= 2) {
                carrito[i].cantity--;
                carrito[i].price -= precioUni; 
            }else{
                carrito.splice(i,1)
            }
       }
       renderCarrito()
    }
    
}
// Calculamos el total a pagar por la compra
function totalPagar() {
    total = 0;
    carrito.forEach((item) => {
        const precio = Number(item.price);
        total = total + precio;

        document.querySelector('#totalPagar').innerHTML = total;
    })
}

//-------------- DOM EVENTS-----------------
const addBtn = document.querySelectorAll("#btn-añadir");
const contenedor = document.querySelector("#contenedor-carrito")
let carrito = [];


addBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const button = e.target;
        const item = button.closest('.card');

        // GET DATA PRODUCT
        const itemName = item.querySelector('#name-product').textContent;
        const itemPrice = item.querySelector('#price-product').textContent;
        const itemImg = item.querySelector('.card-img-top').src;

        const newProduct = {
            product: itemName,
            price: itemPrice,
            img: itemImg,
            cantity: 1,
        }
        addCart(newProduct);
        renderCarrito();
        
    })
})
// COMPRAR PRODUCTOS
document.querySelector('#btncomprar').addEventListener('click', () => {

    if (carrito.length === 0) {
        alert(`
            No tienes ningún producto agregado 
            para comprar.`)
    }else{
        carrito = [];
        alert(`
        !GRACIAS POR SU COMPRA!

        Su pedido llegará pronto.
        ¡disfrutelo!
        `)
        document.querySelector('#totalPagar').innerHTML = '';
        renderCarrito();
    }

})


