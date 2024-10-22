import React, { useEffect, useState } from 'react';
import { getProducts, createProduct } from './API';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

    const handleAddProduct = async () => {
      const newProduct = {
        name: 'Nuevo Producto',
        price: '100',
        description: 'Descripcion del nuevo producto',
        stock: 10
      };

      const addedProduct = await createProduct(newProduct);
        setProducts([...products, addedProduct]);
    }
  return (
    <>
       <h1>Lista de Productos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddProduct}>Agregar Producto</button>
    </>
  )
}

export default App
