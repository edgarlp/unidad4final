import express from 'express';
import Venta from '../models/Venta.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const ventas = await Venta.find().populate('usuarioId productoId');
  res.json(ventas);
});

router.post('/', async (req, res) => {
  const venta = new Venta(req.body);
  await venta.save();
  res.status(201).json(venta);
});

export default router;
