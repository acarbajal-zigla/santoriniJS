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


let formulario = document.getElementById("formularioCompra");
formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    const purseName = formulario.inputProducto.value;
    const cantidad = formulario.inputCantidad.value;

    producto = products.find(products => products.name === purseName);
    if(producto ==  undefined){
        console.log("Item inexistente.");
    }
    else{
        if(cantidad <= producto.stock) {
            producto.stock -= cantidad;
            document.createElement('h3').innerHTML(`${producto.name} agregado al carrito`);
            localStorage.setItem(localStorage.length, JSON.stringify({"productID":producto.id, "cantidad":cantidad}));
        }
        else{
            document.createElement('h3').innerHTML(`No hay suficiente stock. Stock disponible ${producto.stock}`);
        }
    }
    formulario.reset();
});

//alert('¡Gracias por su visita!') 

