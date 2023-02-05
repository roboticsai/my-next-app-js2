

export async function GetEmployee(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const employee = (await response.json()) 
    return employee
  }
  
  export async function GetEmployees() {
    try {
      const response = await fetch('https://localhost:7115/api/employees');
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }