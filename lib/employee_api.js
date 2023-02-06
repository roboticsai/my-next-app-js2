import * as React from 'react';
import { useSWRConfig } from "swr"
import useSWR from 'swr'

export async function GetEmployee(id) {
    const response =  fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const employee = (response.json()) 
    return employee
  }
  
  export async function GetEmployees() {
    const res = await fetch('https://localhost:7115/api/employees');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json(); 
  }

  export function GetEmployeesClientSide({fetcher}) {
    const { data, error } = useSWR('https://localhost:7115/api/employees', {fetcher})

    if (error) throw new Error('Failed to fetch data');
    if (!data) return 'Loading...'
    return data
  }