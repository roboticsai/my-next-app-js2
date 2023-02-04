

export async function GetEmployee(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const employee = (await response.json()) 
    return employee
  }
  
  export async function GetEmployees() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_page=1'
    )
    const employees = (await response.json()) 
    return employees
  }