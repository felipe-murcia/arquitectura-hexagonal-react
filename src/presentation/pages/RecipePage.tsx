import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsThunk } from "../../infrastructure/store/product/productThunks";
import type { AppDispatch } from "../../infrastructure/store/index";
import { useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card'
import { Rating } from "primereact/rating";
import type { Product } from "../../domain/entities/Product";
import type { Recipe } from '../../domain/entities/Recipe';
import { fetchAllRecipesThunk } from "../../infrastructure/store/recipe/recipeThunks";

function RecipePage() {

  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state:any) => state.recipes);

  console.log('data', items);

  useEffect(() => {
    dispatch(fetchAllRecipesThunk());
  }, [dispatch]);

  const ingredientsBodyTemplate = (recipe:Recipe) => {
      return <span>{recipe.ingredients.join(', ')}</span>;
      return <ul>{recipe.ingredients.map((step, index) => <li key={index}>{index} {step}</li>)}</ul>;
  }

  const instructionsBodyTemplate = (recipe:Recipe) => {
      return <span>{recipe.instructions.join(', ')}</span>;
      //return <ul>{recipe.instructions.map((step, index) => <li key={index}>{index} {step}</li>)}</ul>;
  }
 
  return (
    <>
        <Card title="Recipes List">
        {loading && <ProgressSpinner />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <DataTable value={items} tableStyle={{ minWidth: '50rem' }} showGridlines paginator rows={10}>
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column header="Ingredients" body={ingredientsBodyTemplate}></Column>
                <Column header="Instructions" body={instructionsBodyTemplate}></Column>
            </DataTable>
        </Card>
    </>
  )
}

export default RecipePage;
