const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json ());

    let products = [
        {id:1, name: 'Teclado', price: 150 },
        {id:2, name: 'Mouse', price: 80 },
        {id:3, name: 'Monitor', price: 300 },
        {id:4, name: 'Mouse Pad', price: 50 },
    ]

app.get('/product', (req, res) => {
  const { id } = req.query;
  if (id) {
    const product = products.find(p => p.id === parseInt(id));
    if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });
    return res.status(200).json(product);
  }
  return res.status(200).json(products);
});

app.post('/product', (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Campos "name" e "price" são obrigatórios.' });
  }
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price
  };
  products.push(newProduct);
  return res.status(201).json(newProduct);
});

app.put('/product', (req, res) => {
  const { id, name, price } = req.body;
  if (!id || !name || price === undefined) {
    return res.status(400).json({ message: 'Campos "id", "name" e "price" são obrigatórios.' });
  }
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Produto não encontrado.' });

  products[index] = { id: parseInt(id), name, price };
  return res.status(200).json(products[index]);
});

app.patch('/product', (req, res) => {
  const { id, name, price } = req.body;
  if (!id) return res.status(400).json({ message: 'Campo "id" é obrigatório.' });

  const product = products.find(p => p.id === parseInt(id));
  if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;

  return res.status(200).json(product);
});

app.delete('/product', (req, res) => {
  const id = req.query.id || req.body.id;
  if (!id) return res.status(400).json({ message: 'Campo "id" é obrigatório.' });

  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Produto não encontrado.' });

  products.splice(index, 1);
  return res.status(204).send();
});

app.get('/', (req, res) => {
  res.send('API de Produtos rodando! Acesse /product para ver os itens.');
});

app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});