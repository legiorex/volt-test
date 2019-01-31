export const api = {

  async getUsers() {
    const response = await fetch('./api/customers', { method: "GET" });
    const users = await response.json();    
    return users;  
  },

  async setUser(user) {
    await fetch("./api/customers", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });    
  },
  async delUser(id) {
    await fetch(`./api/customers/${id}`, { method: "DELETE"});
  },
  async editUser(id, user) {
    await fetch(`./api/customers/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    });
  },

  async getProducts() {
    const response = await fetch('./api/products', {method: "GET" });
    const products = await response.json();
    return products;
  }


};