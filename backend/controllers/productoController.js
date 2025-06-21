import Producto from '../models/Producto.js';

export async function eliminarProducto(req, res) {
  try {
    const { id } = req.params;
    await Producto.findByIdAndDelete(id);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
  }
}
