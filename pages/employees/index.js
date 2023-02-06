import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Stack } from '@mui/system';
import { FormControl, TextField, InputLabel } from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { GetEmployees } from '../../lib/employee_api';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function BasicTable() {
  const { employees, error } = useSWR('https://localhost:7115/api/employees', fetcher)
  if (error) return <div>Failed to load</div>
  if (!employees) return <div>Loading...</div>
  return (
    <stack spacing={3}>
      <EmployeeList rows={employees}/>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button sx={ { m:1 } }>Submit</Button>
        <Button sx={ { m:1 } }>Cancel</Button>
      </ButtonGroup> 
    </stack>
  );
}

function EmployeeList({rows}) {
  const emp_id = 0
  return (
    <Stack direction="row" spacing={3}>
        <TableContainer component={Paper} sx={ {m:2, p:2} }>
        <Table sx={{ minWidth: 100, m: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EmployeeDetail rows={rows} id={emp_id}/>  
    </Stack>
  );
}

function EmployeeDetail({rows, id}) {
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: ""
    }
  );
  
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  var row = rows.find(r => r.id === id)
  console.log(row)
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Stack component={Paper} sx={ {m:2, p:2} } spacing={3}>
      <Stack direction="row" spacing={3}>
        <InputLabel>Name</InputLabel>
        <TextField />
      </Stack>
      <FormControl>
        <FormLabel sx={ {m: 2} } id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <Stack direction="row" spacing={3}>
        <FormLabel id="demo-row-radio-buttons-group-label">DOB</FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>
      <Stack direction="row" spacing={3}>
        <InputLabel>Salary</InputLabel>
        <TextField />
      </Stack>
      <Qualification rows={rows}/>
    </Stack>
  );
}

function Qualification({rows}) {
  return (
    <Container component={Paper} sx={ {m:2, p:2} }>
    <Stack spacing={1}>
      <FormControl fullWidth>
        <Stack direction="row">
          <InputLabel sx={{m:1, minWidth: 100, minHeight:50 }}>Qualification</InputLabel>
          <NativeSelect
            sx={{m:1, minWidth: 100, minHeight:50 }}
            defaultValue={10}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>SLC</option>
            <option value={20}>BE</option>
            <option value={30}>ME</option>
          </NativeSelect>
          <TextField sx={{m:1, minWidth: 100, minHeight:50 }}/>
          <Button sx={{m:1, minWidth: 100, minHeight:50 }} variant="contained" href="#contained-buttons">Add</Button>
        </Stack>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
    </Container>
  );
}