/*  Bienvenida en un alert */
alert ("Bienvenido a Santorini Oficial")

do {
    showMenu();
    let option = showMenu(); 
    if(option === products.length + 1) break;
    let qty = parseInt(prompt(SelectedQty))

    addToCart(option, qty);

    resp = prompt('¿Desea agregar más productos al carrito? S/N');

}while (resp === "S" || resp === "s");

if(cart > 0) {
    alert(`Su compra tiene un total de $${cart}`);
}

alert('¡Gracias por su visita!')

