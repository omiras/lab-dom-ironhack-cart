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

  // Recupero el nombre y el precio del producto. Podríamos poner etiquetas id en el HTML sin problema.

  let name = document.querySelectorAll(".create-product input")[0].value;
  let price = document.querySelectorAll(".create-product input")[1].value;

  // Es rara esta notación? document.querySelectorAll(".create-product input") devuelve un 'array de nodos'. [0] accede al primer input. .value accede a la propuedad 'value' del input. Lo he puesto así a propósito; pero sería más eficiente guardar el array de inputs en una variable.

  // Creo un nuevo producto. Es una nueva fila de la tabla. Fijaos como usamos innerHTML para poder crear un montón de nodos y ahorrarnos hacer miles de 'createElement'

  let newProduct = document.createElement("tr");
  newProduct.innerHTML = `
        <tr class="product">
        <td class="name">
          <span>${name}</span>
        </td>
        <td class="price">$<span>${price}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>`;

  // Añadimos el producto a la tabla
  document.querySelector("tbody").appendChild(newProduct);

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

  // ITERATION 5

  // Asocio el evento "click" al botón con id="create". NO utilizo forEach....¡querySelector no devuelve un array, si no un nodo!

  document.querySelector("#create").addEventListener("click", createProduct);

});
