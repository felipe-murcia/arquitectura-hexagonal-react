import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 

import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsThunk } from "./infrastructure/store/product/productThunks";
import type { AppDispatch } from "./infrastructure/store/index";
import type { ProductState } from './infrastructure/store/product/productSlice';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state:any) => state.products);

  console.log('data', items);

  const loadTest = async () => {

    try {

    dispatch(fetchAllProductsThunk());
    } catch (error) {
      console.error('Error de login:', error);
    }

  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + Artitecchure Hexzagonal</h1>
      <div className="card">
        <button onClick={() => loadTest()}>
          test
        </button> 

        <p>
          {loading && 'Cargando...'}
          {error && `Error: ${error}`}
          {items && JSON.stringify(items)}
        </p>
      </div> 
    </>
  )
}

export default App
