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

/* Agregar productos y su cantidad al carrito 
option = el producto seleccionado por el usuario
quantity = la cantidad de producto seleccionada por el usuario
*/ 
const addToCart =(option, quantity) => {
    switch(option) {
        case 1:
            if(inStock(quantity, rafinaStock)) {
                cart += (quantity * rafinaPrice);
                rafinaStock -= quantity
                alert("Producto agregado al carrito")
            }
        break;

        case 2: 
            if(inStock(quantity, patmosStock)) {
                cart += (quantity * patmosPrice);
                patmosStock -= quantity
                alert("Producto agregado al carrito")
        }
    break;

        case 3:
            if(inStock(quantity, pyrgosStock)) {
                cart += (quantity * pyrgosPrice);
                pyrgosStock -= quantity
                alert("Producto agregado al carrito")
            }
        break;

        case 4: 
        if(inStock(quantity, peryssaStock)) {
            cart += (quantity * peryssaPrice);
            peryssaStock -= quantity
            alert("Producto agregado al carrito")
        }
    break;

        default:
            alert("Función no válida")
    }
    return true;
}

