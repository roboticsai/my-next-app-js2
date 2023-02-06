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
import useSWR from 'swr'
import { useState } from 'react';
import { useReducer } from "react";
import { Form } from 'react'
import { useSWRConfig } from "swr"
import useSWRMutation from 'swr/mutation'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function EmployeeSPA() {
  const { data, error } = useSWR('https://localhost:7115/api/employees', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
      <EmployeeList rows={data}/>
  )
}

function EmployeeList({rows}) {
  const [employeeId, setEmployeeId] = useState(1);

  function handleClick(employeeId) {
    setEmployeeId(employeeId)
  }
  function setGender(id) {
    if(id==0)
      return 'Male'
    else if(id==1)
      return 'Female'
    else if(id==2)
      return 'Third Gender'
  }
  return (
    <Stack direction="row" spacing={3}>
        <TableContainer component={Paper} sx={ {m:2, p:2} }>
        <Table sx={{ minWidth: 100, m: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender&nbsp;(g)</TableCell>
              <TableCell align="right">Salary&nbsp;(g)</TableCell>
              <TableCell align="right">DOB&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.employeeId}
                onClick={() => handleClick(row.employeeId)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{setGender(row.gender)}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EmployeeDetail rows={rows} employeeId={employeeId}/>  
    </Stack>
  );
}

async function sendRequest(url, { arg }) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg)
  }).then(res => res.json())
}

function EmployeeDetail({rows, employeeId}) {
  const { trigger, isMutating } = useSWRMutation('https://localhost:7115/api/employees', sendRequest, /* options */)

  var employee = rows.find(r => r.employeeId === employeeId)

  const handleSubmit = evt => {
    console.log("submittiing", formInput)
    async () => {
      try {
        const result = await trigger({ employee }, /* options */)
      } 
      catch (e) {
        // error handling
      }}
  };

  const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div>
      <Paper sx={ {m:2, p:2} } spacing={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            defaultValue={employee.name}
            onChange={handleChange}
          />
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            defaultValue={employee.gender}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleChange}
          >
            <FormControlLabel value="0" control={<Radio />} label="Male" />
            <FormControlLabel value="1" control={<Radio />} label="Female" />
            <FormControlLabel value="2" control={<Radio />} label="Third Gender" />
          </RadioGroup>
          <Stack direction="row" spacing={3}>
            <FormLabel id="demo-row-radio-buttons-group-label">DOB</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={employee.dob}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>
          <TextField
            label="Salary"
            id="margin-normal"
            name="salary"
            defaultValue={employee.salary}
            onChange={handleChange}
          />
          <Qualification rows={employee.qualifications} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isMutating}
          >
          Submit 
          </Button>
        </form>
      </Paper>
    </div>
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
          <TextField
            label="Marks"
            id="margin-normal"
            name="marks"
          />
          <Button sx={{m:1, minWidth: 100, minHeight:50 }} variant="contained" href="#contained-buttons">Add</Button>
        </Stack>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Qualification Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.qualificationListId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.qualificationListId}
                </TableCell>
                <TableCell align="right">{row.qualificationList.qualificationName}</TableCell>
                <TableCell align="right">{row.marks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
    </Container>
  );
}

export default EmployeeSPA