document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña').value;

  const res = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, contraseña })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem('token', data.token);
    document.getElementById('resultado').innerText = "✅ Login exitoso.";
  } else {
    document.getElementById('resultado').innerText = `❌ Error: ${data.mensaje || data.error}`;
  }
});
