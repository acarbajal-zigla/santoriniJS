/* Variables generales para el desarrollo de Santorini */

/* UNA VEZ QUE CREAMOS LA FUNCION FLECHA PARA TRAER EL ARRAY DE PCTOS/OBJS ESTAS LINEAS DE CODIGO NO SON NECESARIAS */
/* const menu = `Escoge un producto: 
1 - Baguette Rafina
2 - Mochila Patmos
3 - Mochila Pyrgos
4 - Bandolera Peryssa
5 - Salir
`; */

const SelectedQty = `Indique la cantidad de productos que desea`;

let products = [
    {id: 1, name: 'Rafina', price: 1000, stock: 20},
    {id: 2, name: 'Patmos', price: 3000, stock: 10},
    {id: 3, name: 'Pyrgos', price: 4000, stock: 5},
    {id: 4, name: 'Peryssa', price: 1200, stock: 10},
]


/* UNA VEZ QUE CREAMOS EL ARRAY DE OBJETOS NO SON NECESARIAS ESTAS LINEAS DE CODIGO */
/* // Lista de precios //
const rafinaPrice = 1000;
const patmosPrice = 3000;
const pyrgosPrice = 4000;
const peryssaPrice = 1200;

// Lista de Stock //

let rafinaStock = 20;
let patmosStock = 10;
let pyrgosStock = 5;
let peryssaStock = 10; */


// Carrito // 

let cart = 0;

// Respuesta //

let resp = 'S';