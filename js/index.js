/*  Bienvenida en un alert */


 
//alert ("Bienvenido a Santorini Oficial")

/*do {
    let option = showMenu(); 
    if(option === products.length + 1) break;
    let qty = parseInt(prompt(SelectedQty))

    addToCart(option, qty);

    resp = prompt('¿Desea agregar más productos al carrito? S/N');

}while (resp === "S" || resp === "s");
*/
productList = document.getElementById("productsList");
for (const product of products) {
    let li = document.createElement("li");
    li.innerHTML = `${product.id}. ${product.name}`
    productList.appendChild(li);
}

// bloque de codigo que (va a ser funcion) inicializa el stock de los productos
// en funcion del localStorage
for (let elemento in localStorage){
    const aux = JSON.parse(elemento);
    let aux2 = products.find(product=>product.id === aux.productID);
    aux2 -= parseInt(aux.cantidad);
}

const formulario = document.getElementById("formularioCompra");
formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    const purseName = formulario.inputProducto.value;
    const cantidad = formulario.inputCantidad.value;

    producto = products.find(products => products.name === purseName);
    if(producto ==  undefined){
        console.log("Item inexistente.");
    }
    else{
        result = document.getElementById("result");
        if(cantidad <= producto.stock) {
            producto.stock -= cantidad;
            console.log(producto.stock)
            result.innerHTML = `<br>${producto.name} agregado al carrito`;
            localStorage.setItem(localStorage.length, JSON.stringify({"productID":producto.id, "cantidad":cantidad}));
        }
        else{
            result.innerHTML = `<br>No hay suficiente stock. Stock disponible ${producto.stock}.`;
        }
    }
    formulario.reset();
});

const botonComprar = document.getElementById("buttonComprar");
botonComprar.addEventListener("click", showCart);

function showCart(){
    let saldoTotal = 0;
    for (let elemento in localStorage){
        const aux = JSON.parse(elemento);
        saldoTotal += parseInt(aux.cantidad) * products.find(product=>product.id === aux.productID).price
    }
    document.createElement('h3').innerHTML(`El monto total de tu compra es: $${producto.stock}`);
}
//alert('¡Gracias por su visita!') 

