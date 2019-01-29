// const MAIN_URL = './api/customers';


export const api = {

  async fetchUsers() {
    const response = await fetch('http://localhost:8000/api/customers', {
      method: 'GET',
    });

    const users = await response.json();
    console.log(users)
    return users;
  
  }
};