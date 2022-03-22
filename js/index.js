// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;

  // recuperar la cantidad de producto que ha puesto el usuario
  const quantity = product.querySelector('.quantity input').value;

  // step 3
  let total = price * quantity;

  // step 4
  let subtotalCell = product.querySelector('.subtotal span');

  // step 5
  subtotalCell.textContent = total;

}

function calculateAll() {

  // ITERATION 2
  //... your code goes here

  // He añadido un nuevo producto en el HTML

  // Recupero todos los nodos que tienen class="product". Para cada nodo, invoco la función updateSubtotal



  document.querySelectorAll(".product").forEach(product => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here

  // Voy a iterar por todos los nodos que tienen el subtotal de precios y sumar sus valores

  // Variable para acumular la suma de subtotales
  let total = 0;

  document.querySelectorAll(".subtotal span").forEach(subtotal => {
    total += +subtotal.textContent; // recordad que el '+' deñamte de la expresión, convierte el "string" a number. También se puede usar parseFloat. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  });

  // Pongo el total en el nodo HTML correspondiente
  document.querySelector("#total-value span").textContent = total;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  // Diferencias entre event.target y event.currentTarget? https://developer.mozilla.org/es/docs/Web/API/Event/currentTarget 

  // Tenemos que eliminar del DOM: el padre del padre del elemento clicado
  let productoEliminar = target.parentNode.parentNode;
  
  // parentNode.parentNode?? Explicación: https://oscarm.tinytake.com/msc/NjY1MTI4NF8xOTIxMDY0OQ

  // el producto es un hijo de la tabla. Me guardo el nodo "tbody"; y le paso como parámetro a la función 'removeChild' el nodo que hay que eliminar. ¡Es super importante entender que la esctructura HTML es una estructura jerárquica de árbol!
 
  document.querySelector("tbody").removeChild(productoEliminar);

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  // ITERATION 4

  // A todos los botones, los ponemos a escuchar el evento 'click'

  document.querySelectorAll(".btn-remove").forEach(button => {
    button.addEventListener("click", removeProduct);
  });

});
