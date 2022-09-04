const api_url = "https://todoo.5xcamp.us";

const api = {
  // getAllTodos: async () =>{
  //   await fetch(`${api_url}/todos`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
       
  //     },
  //   });
  // },

  // addTodos: async(data) =>{
  //   await fetch(api_url + `/todos`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     method: "POST",
  //     data: data
  //   });
  // },

  // toggleTodos: async (id) => {
  //   await fetch(api_url + `/todos/${id}/toggle`, {
  //     headers:{
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     method: "PATCH",
  //   });
  // },

  // deleteTodos: async (id) => {
  //   await fetch(api_url + `/todos/${id}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     method: "DELETE",
  //   }); 
  // },

  userSignIn: (user) =>{
    return fetch(`${api_url}/users/sign_in`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
  },

  userSignUp: (user) =>{
    return fetch(`${api_url}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
  }
}





export default api;