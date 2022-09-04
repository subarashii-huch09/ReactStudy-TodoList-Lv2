const api_url = "https://todoo.5xcamp.us";

const api = {
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