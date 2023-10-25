import {useState} from "react";

import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './Users.scss';
import {userRows} from '../../data';
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img ||"/noavatar.png" } alt="" />
      }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      type: "string",
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      type: "string"
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      type: 'string',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: "email",
        headerName: "Email",
        width: 250,
        editable: true,
        type: 'string'
    },
    {
        field: "phone",
        headerName: "Phone Number",
        width: 160,
        editable: true,
        type: 'string'
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 150,
        type: 'string'
    },
    {
        field: "status",
        headerName: "Verified",
        width: 100,
        type: "boolean",
    },
  ];

const Users = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {open && <Add 
                        slug="users" 
                        columns={columns} 
                        setOpen={setOpen} 
                        />
            }
        </div>
    );
}

export default Users;