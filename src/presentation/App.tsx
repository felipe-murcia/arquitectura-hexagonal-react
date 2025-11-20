import ProductPage from "./pages/ProductPage"
import { Button } from 'primereact/button';
import RecipePage from "./pages/RecipePage";
import UserPage from "./pages/UserPage";

function App() {
 
  return (
    <>
      <h1>React + Arquitectura Hexagonal 2</h1>
      <Button label="Check" icon="pi pi-check" />
      <ProductPage />
      <RecipePage />
      <UserPage />
      {/* <ProductPage />
      <ProductPage />
      <ProductPage />
      <ProductPage />
      <ProductPage />
      <ProductPage />
      <ProductPage /> */}
    </>
  )
}

export default App
