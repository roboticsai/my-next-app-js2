import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import styles from '@/styles/Home.module.css'
import gridPopupMenu from '../components/gridPopupMenu'

export default function Home() {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { 
      field: 'athlete', 
      headerComponent: gridPopupMenu,      
      minWidth: 270,
      flex: 1,
    },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div style={{height: 600, width: '100%'}} className="ag-theme-alpine">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        sideBar={'columns'}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  )
}
