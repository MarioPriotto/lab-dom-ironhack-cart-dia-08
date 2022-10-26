// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price    = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span').textContent = price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalGeral = 0;
  [...document.querySelectorAll('.product')].forEach(e => {
        updateSubtotal(e);
        totalGeral += parseInt(e.querySelector('.subtotal span').textContent);
      });
 
  document.querySelector('#total-value span').textContent = totalGeral;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const vo  = target.parentNode.parentNode;
  const bi  = vo.parentNode;
  bi.removeChild(vo);
  calculateAll();
}

// ITERATION 5

function createProduct() {

  let clone = document.querySelector('.product').cloneNode(true);
  clone.querySelector('.name  span').textContent = document.querySelectorAll('.create-product td input')[0].value;
  clone.querySelector('.price span').textContent = document.querySelectorAll('.create-product td input')[1].value;
  clone.querySelector('.quantity input').value   = 0;
  
  let destino = document.querySelector('body table');
  destino.appendChild(clone);

  [...document.querySelectorAll('.btn-remove')].forEach(e => {
     e.onclick = function (event) {
        removeProduct(event);
     }
  });

  calculateAll();
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  [...document.querySelectorAll('.btn-remove')].forEach(e => {
    e.onclick = function (event) {
        removeProduct(event);
    }
  });

  document.getElementById('create').addEventListener('click',() => { createProduct() } );

});
