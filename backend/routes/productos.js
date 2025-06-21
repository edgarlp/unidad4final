import express from 'express';
import Producto from '../models/Producto.js';
import verificarToken from '../middlewares/verificarToken.js';
import { eliminarProducto } from '../controllers/productoController.js';


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({ mensaje: 'Producto creado', producto: nuevoProducto });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete('/:id', verificarToken, eliminarProducto);


export default router;


