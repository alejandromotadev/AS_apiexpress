const express = require('express')
const productsRoute = require('./routes/productsRoute')
const app = express();
const port = 3000;

app.use(express.json());
// app.use('/', (req, res)=> {
//     res.send('Arquitectura de software. \n Bienvenidos');
// })
app.use('/products', productsRoute);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});