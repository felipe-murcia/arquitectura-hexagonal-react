import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../infrastructure/store/index";
import { useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { fetchAllUsersThunk } from "../../infrastructure/store/user/userThunks";

function UserPage() {

  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state:any) => state.users);

  console.log('data', items);

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);
  
  return (
    <>
        <Card title="Users List">
        {loading && <ProgressSpinner />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
            <DataTable value={items} tableStyle={{ minWidth: '50rem' }} showGridlines paginator rows={10}>
                <Column field="id" header="ID"></Column>
                <Column field="firstName" header="First Name"></Column>
                <Column field="lastName" header="Last Name"></Column>
                <Column field="birthDate" header="Birth Date"></Column>
                <Column field="age" header="Age"></Column>
                <Column field="gender" header="Gender"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="role" header="Role"></Column>
            </DataTable>
        </Card>
    </>
  )
}

export default UserPage;
