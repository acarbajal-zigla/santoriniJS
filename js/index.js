/*  Bienvenida en un alert */

/* JUAN NO SÉ DÓNDE UBICAR LAS VARIABLES DE ESTA FUNCION SI ACA O EN VARIABLES GRALES*/
/* ENTREGABLE DOM */

/* let tituloBolsos = document.createElement('p');
let h2 = document.createElement('h2');

h2.textContent = 'Carteras en Stock';
document.body.appendChild(tituloBolsos); */

/* ENTREGABLE EVENTOS */
let button = document.getElementById('buttonOne');
let text = document.createElement('h1');

button.onclick = () => {
    text.innerHTML = '<h1> Bienvenidx a Santorini Oficial <h1>';
    document.body.appendChild(text);
}


/* 
alert ("Bienvenido a Santorini Oficial")

do {
    let option = showMenu(); 
    if(option === products.length + 1) break;
    let qty = parseInt(prompt(SelectedQty))

    addToCart(option, qty);

    resp = prompt('¿Desea agregar más productos al carrito? S/N');

}while (resp === "S" || resp === "s");

if(cart > 0) {
    alert(`Su compra tiene un total de $${cart}`);
}

alert('¡Gracias por su visita!') */

