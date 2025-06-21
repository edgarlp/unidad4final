import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
});

export default mongoose.model('Venta', ventaSchema);
