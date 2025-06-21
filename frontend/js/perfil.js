document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    document.getElementById('perfil').innerText = "⚠️ No estás logueado.";
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/auth/perfil', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      document.getElementById('perfil').innerHTML = `
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Email:</strong> ${data.email}</p>
      `;
    } else {
      document.getElementById('perfil').innerText = `❌ Error: ${data.mensaje || data.error}`;
    }
  } catch (err) {
    document.getElementById('perfil').innerText = "❌ Error al conectar con el servidor.";
  }
});
