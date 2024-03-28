const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },
  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },
  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort"],
    imagen: "./img/4quesos.png",
  },
  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rúcula", "Jamón"],
    imagen: "./img/especial.png",
  },
  {
    id: 5,
    nombre: "Pizza con Ananá",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Piña"],
    imagen: "./img/anana.png",
  },
];


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('searchForm');
  const resultContainer = document.getElementById('resultContainer');
  const button = document.querySelector('.button.fill');

  button.addEventListener('click', function(event) {
      event.preventDefault();
      const inputValue = document.getElementById('pizzaId').value;
      if (!isNaN(inputValue) && inputValue.trim() !== '') {
          const pizzaId = parseInt(inputValue);
          const pizza = pizzas.find(pizza => pizza.id === pizzaId);
          if (pizza) {
              resultContainer.innerHTML = `
                  <div class="card">
                      <img src="${pizza.imagen}" alt="${pizza.nombre}">
                      <div class="card-content">
                          <h3>${pizza.nombre}</h3>
                          <p>Precio: $${pizza.precio}</p>
                      </div>
                  </div>
              `;
              // Guardar la última pizza buscada en localStorage
              localStorage.setItem('lastPizza', JSON.stringify(pizza));
          } else {
              resultContainer.innerHTML = '<p class="error">Lo que ingresaste no es válido.</p>';
          }
      } else {
          resultContainer.innerHTML = '<p class="error">Debes ingresar un número válido.</p>';
      }
  });

  // Obtener la última pizza buscada de localStorage y mostrarla al cargar la página
  const lastPizza = JSON.parse(localStorage.getItem('lastPizza'));
  if (lastPizza) {
      resultContainer.innerHTML = `
          <div class="card">
              <img src="${lastPizza.imagen}" alt="${lastPizza.nombre}">
              <div class="card-content">
                  <h3>${lastPizza.nombre}</h3>
                  <p>Precio: $${lastPizza.precio}</p>
              </div>
          </div>
      `;
  }
});


