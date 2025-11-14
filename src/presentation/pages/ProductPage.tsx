import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsThunk } from "../../infrastructure/store/product/productThunks";
import type { AppDispatch } from "../../infrastructure/store/index";
import { useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import type { Product } from "../../domain/entities/Product";

function ProductPage() {

  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state:any) => state.products);

  console.log('data', items);

  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

    const ratingBodyTemplate = (product:Product) => {
        return <Rating value={product.rating}  cancel={false} />;
    };
  
  return (
    <>
        <Card title="Products List">
        {loading && <ProgressSpinner />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <DataTable value={items} tableStyle={{ minWidth: '50rem' }} showGridlines paginator rows={10}>
                <Column field="id" header="ID"></Column>
                <Column field="title" header="Title"></Column>
                <Column field="description" header="Description"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price"></Column>
                <Column field="stock" header="Stock"></Column>
                <Column header="Rating" body={ratingBodyTemplate}></Column>
            </DataTable>
        </Card>
    </>
  )
}

export default ProductPage;
