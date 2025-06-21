import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import productosRoutes from './routes/productos.js';


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tpIntegradorWeb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB', err));

app.use('/auth', authRoutes);
app.use('/productos', productosRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
