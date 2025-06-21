document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/productos')
    .then(res => res.json())
    .then(productos => {
      const lista = document.getElementById('listaProductos');
      productos.forEach(prod => {
        const li = document.createElement('li');
        li.textContent = `${prod.nombre} - $${prod.precio} (${prod.stock} unidades)`;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar productos:', error);
    });
});
