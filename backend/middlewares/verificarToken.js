import jwt from 'jsonwebtoken';

function verificarToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. No token proporcionado.' });
  }

  try {
    const tokenLimpio = token.replace('Bearer ', '');
    const verificado = jwt.verify(tokenLimpio, 'secreto123');
    req.usuario = verificado;
    next();
  } catch (error) {
    res.status(400).json({ mensaje: 'Token no válido' });
  }
}

export default verificarToken;
