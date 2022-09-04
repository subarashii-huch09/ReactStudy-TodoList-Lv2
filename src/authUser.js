export const authUser = {
  setUserData: (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  },
  getUserData: () => {
    JSON.parse(localStorage.getItem("user"));
  },
  clearUserData: () => {
    localStorage.clear();
  },
};

export const getAuthToken = () => authUser.getUserData().authorization;
