import ProductPage from "./pages/ProductPage"
import { Button } from 'primereact/button';
import RecipePage from "./pages/RecipePage";
import UserPage from "./pages/UserPage";

function App() {
 
  return (
    <div style={{padding:60, backgroundColor:'aliceblue'}}>
      <h1>React + Arquitectura Hexagonal 2</h1>
      <br />
      <ProductPage />
      <br />
      <RecipePage />
      <br />
      <UserPage />
    </div>
  )
}

export default App
