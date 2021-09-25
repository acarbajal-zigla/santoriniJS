/* Funciones necesarias para el desarrollo de Santorini */

/* Verificar si existe suficiente stock de un producto específico
quantity = La cantidad deseada por el usuario
stock = La cantidad de producto disponible
Resultado
TRUE = Hay stock
FALSE = No hay stock
*/
const InStock = (quantity, stock) => {
    if (quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;   
}

/* ESTA FUNCION EJECUTA EL AGREGADO DE LOS PRODUCTOS SELECCIONADOS AL CARRITO
OPTION = LA OPCION SELECCIONADA POR EL USUARIO
QUANTITY = LA CANTIDAD DESEADA POR EL USUARIO */
const addToCart = (option, quantity) => {
    const found = products.find((product)=>{product.id === option })
    if(InStock(quantity, found.stock)) {
        cart += (quantity * found.price);
        products[option-1].stock -= quantity;
        alert(`${found.name} agregado al carrito`);
    }
}

/* ESTA FUNCION GENERA EL MENU DINÁMICO EN BASE A LOS PCTOS EXISTENTES 
RETORNA EL ID DEL PRODUCTO ELEGIDO */
const showMenu = () => {
    let menu = 'Elija un producto: \n';
    products.forEach((product)=>{
        menu += product.id + "-" + product.name + "\n";
    });
    menu += (products.length + 1) + "-Salir";
    return parseInt(prompt(menu));
}