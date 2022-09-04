const authUser = {
  setUserData:(data) =>{
     localStorage.setItem('user', JSON.stringify(data));
  },
  getAuthToken:() => authUser.getUserData().authorization,
  getUserData:() => {JSON.parse(localStorage.getItem('user'))},

  clearUserData:() => {localStorage.clear()}

}

export default authUser