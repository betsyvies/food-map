/* Hacemos un array de objetos para acceder más rapido a la data */
comidas = [
  {tipo: 'comida sana'},
  {tipo: 'comida mexicana'},
  {tipo: 'comida china'},
  {tipo: 'comida rapida'},
  {tipo: 'comida criolla' }
];

/* Con esta funcion agregamos a los elementos de el array la cantidad
de restaurant y un array de ellos*/
function getRestaurants() {
  for (var i = 0; i < comidas.length; i++) {
    /* Restaurants por tipo de comida */
    tipos = Object.keys(data[comidas[i].tipo]);
    /* Numero de restaurants */
    comidas[i].restaurants = tipos.length;
    /* Lista de restaurants */
    comidas[i].restaurantsList = tipos;
  }
};  
getRestaurants();

