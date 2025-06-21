// frontend/js/agregar-producto.js

document.getElementById('productoForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const descripcion = document.getElementById('descripcion').value;
  const stock = document.getElementById('stock').value;
  const token = localStorage.getItem('token');

  try {
    const res = await fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ nombre, precio, descripcion, stock })
    });

    const data = await res.json();
    document.getElementById('mensaje').textContent = data.mensaje || data.error;
  } catch (err) {
    document.getElementById('mensaje').textContent = 'Error al crear producto.';
    console.error(err);
  }
});
