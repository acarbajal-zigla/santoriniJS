/* Funciones necesarias para el desarrollo de Santorini */

/* Verificar si existe suficiente stock de un producto específico
quantity = La cantidad deseada por el usuario
stock = La cantidad de producto disponible
Resultado
TRUE = Hay stock
FALSE = No hay stock
*/


/* ESTA FUNCION EJECUTA EL AGREGADO DE LOS PRODUCTOS SELECCIONADOS AL CARRITO
OPTION = LA OPCION SELECCIONADA POR EL USUARIO
QUANTITY = LA CANTIDAD DESEADA POR EL USUARIO */
const addToCart = (option, quantity) => {
    const found = products.find(product=>product.id === option)
    
}

/* ESTA FUNCION GENERA EL MENU DINÁMICO EN BASE A LOS PCTOS EXISTENTES 
RETORNA EL ID DEL PRODUCTO ELEGIDO */
/*
const showMenu = () => {
    let menu = 'Elija un producto: \n';
    products.forEach((product)=>{
        menu += product.id + "-" + product.name + "\n";
    });
    menu += (products.length + 1) + "-Salir";
    return parseInt(prompt(menu));
}
*/

