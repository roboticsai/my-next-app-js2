import React, { useState, useCallback,useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import useSWR from 'swr'

const getApiData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  ).then((response) => response.json());

  // update the state
  setUsers(response);
};

function EmployeeSPA() {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'country', sortable: true, filter: true },
    { field: 'year' },
    {
      field: 'athlete',
      minWidth: 250,
      cellRenderer: (params) => {
        return <span style={{ marginLeft: 60 }}>{params.value}</span>;
      },
    },
    { field: 'sport', minWidth: 200 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ]);
    
  const getApiData = async () => {
    const response = await fetch(
      "https://www.ag-grid.com/example-assets/olympic-winners.json"
    ).then((response) => response.json());
  
    // update the state
    setRowData(response)
    console.log(response)
  };
  
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}>
      </AgGridReact>
  </div>
  )
}

export default EmployeeSPA