import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
import verificarToken from '../middlewares/verificarToken.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { nombre, email, contraseña } = req.body;

    const salt = await bcrypt.genSalt(10);
    const contraseñaEncriptada = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      contraseña: contraseñaEncriptada
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) return res.status(400).json({ mensaje: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: usuario._id }, 'secreto123', { expiresIn: '1h' });

    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/perfil', verificarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id).select('-contraseña');
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
