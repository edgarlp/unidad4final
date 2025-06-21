import mongoose from 'mongoose';

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String },
  stock: { type: Number, default: 0 }
});

const Producto = mongoose.model('Producto', ProductoSchema);
export default Producto;

