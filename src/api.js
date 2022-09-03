const api_url = "https://todoo.5xcamp.us";

const api = {
  getAllTodos: async () =>{
    await fetch(api_url + `/todos`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "GET"
    });
  },

  addTodos: async(data) =>{
    await fetch(api_url + `/todos`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "POST",
      data: data
    });
  },

  toggleTodos: async (id) => {
    await fetch(api_url + `/todos/${id}/toggle`, {
      headers:{
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "PATCH",
    });
  },

  deleteTodos: async (id) => {
    await fetch(api_url + `/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    }); 
  },

  user_signIn: async (data) =>{
    await fetch(api_url + `/users/sign_in`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      data:data
    });
  },
  user_signOut: async () =>{
    await fetch(api_url + `/users/sign_out`, {
      headers: { Authorization: localStorage.getItem("token") },
      method: "delete",
    });
  },

  user_signUp: async(data) =>{
    await fetch(api_url+`/users`,{
      method:"POST",
      data:data
    })
  }
}





export default api;