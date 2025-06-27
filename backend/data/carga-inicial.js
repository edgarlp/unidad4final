import mongoose from 'mongoose';
import Producto from '../models/Producto.js';
import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';

mongoose.connect('mongodb://localhost:27017/tpweb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Conectado a MongoDB');

  const contraseñaEncriptada = await bcrypt.hash('123456', 10);
  const usuarioExistente = await Usuario.findOne({ email: 'laura@mail.com' });
  if (!usuarioExistente) {
    await Usuario.create({
      nombre: 'Laura',
      email: 'laura@mail.com',
      contraseña: contraseñaEncriptada
    });
    console.log('Usuario Laura creado');
  } else {
    console.log('El usuario Laura ya existe');
  }

  const productos = [
    { nombre: 'Notebook HP', precio: 250000, stock: 10 },
    { nombre: 'Mouse Logitech', precio: 18000, stock: 25 },
    { nombre: 'Monitor Samsung 24"', precio: 130000, stock: 5 }
  ];

  for (let prod of productos) {
    const existe = await Producto.findOne({ nombre: prod.nombre });
    if (!existe) {
      await Producto.create(prod);
      console.log(`Producto "${prod.nombre}" creado`);
    } else {
      console.log(`Producto "${prod.nombre}" ya existe`);
    }
  }

  console.log('Carga inicial completa');
  mongoose.disconnect();
})
.catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});
